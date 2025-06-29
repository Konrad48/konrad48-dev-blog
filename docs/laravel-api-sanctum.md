# Creating Laravel API with Sanctum

This guide shows how to create a secure REST API using Laravel Sanctum authentication.

## Setup Project

Create new Laravel project:

```bash
laravel new api-project
cd api-project
```

Initialize Laravel API Starter Kit (it will install Sanctum and other dependencie):

```bash
php artisan install:api
```

## Configure Sanctum

Add Sanctum middleware in `app/Http/Kernel.php`:

```php
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```

## Model and Controller
Artisan command from above should automaticly create User model and migration.
However you should add to User class `HasApiTokens` trait:
```php
<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;
```




Create User controller and add authentication logic in `app/Http/Controllers/UserController.php`:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);
        

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad credits'
            ], 401);
        }

        return response()->json([
            'user' => $user,
            'token' => $user->createToken('auth_token')->plainTextToken
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        
        return response()->json(['message' => 'Logged out successfully']);
    }

    public function showMe(Request $request)
    {
        return response()->json($request->user());
    }

    public function update(Request $request)
    {
        $request->validate([
            'name' => 'string|max:255',
            'email' => 'string|email|max:255|unique:users,email,' . $request->user()->id,
            'password' => 'string|min:8|nullable',
        ]);

        $user = $request->user();
        
        if ($request->has('name')) {
            $user->name = $request->name;
        }
        if ($request->has('email')) {
            $user->email = $request->email;
        }
        if ($request->has('password')) {
            $user->password = Hash::make($request->password);
        }
        
        $user->save();

        return response()->json($user);
    }
}
```

## Define API Routes

Add routes in `routes/api.php`:

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

// Public routes
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [UserController::class, 'logout']);
    Route::get('/user', [UserController::class, 'showMe']);
    Route::put('/user', [UserController::class, 'update']);
});
```

## Setup PostgreSQL Database

Install docker and docker-compose if you don't have it already

Create docker-compose.yml file

```yml
services:
  db:
    image: postgres:latest
    container_name: laravel_postgres_db
    restart: always
    environment:
      POSTGRES_USER: laravel_user
      POSTGRES_PASSWORD: your_postgress_password
      POSTGRES_DB: laraveldb
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

Launch your docker container with the command:

```bash
docker-compose up -d
```

Now you can update your .env file with the following:
```bash
DB_CONNECTION=pgsql
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=laraveldb
DB_USERNAME=laravel_user
DB_PASSWORD=your_postgress_password
```
## Migrating tables
To migrate run `php artisan migrate`

## Chace your routes and config
To cache your routes run `php artisan route:cache`
To cache your config run `php artisan config:cache`

## Running the application
Now you can run your application using `php artisan serve`

## Testing the API
Now you can try it out using Postman or any other API testing tool.

You can also add documentation to your API using Scramble: https://scramble.dedoc.co/installation

