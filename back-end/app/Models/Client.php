<?php

namespace App\Models;

use App\Models\Project;
use App\Models\CustomerCompany;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

   protected $fillable = ['lastname', 'firstname', 'phone', 'email'];

   public function customerCompany_client(): HasMany
   {
       return $this->hasMany(CustomerCompany::class);
   }

   public function projects_client(): HasMany
   {
       return $this->hasMany(Project::class);
   }
}
