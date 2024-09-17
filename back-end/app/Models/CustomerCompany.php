<?php

namespace App\Models;

use App\Models\Project;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerCompany extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'adresse', 'siret'];

    public function projects_company(): HasMany
    {
        return $this->hasMany(Project::class);
    }
}
