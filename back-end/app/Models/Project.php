<?php

namespace App\Models;

use App\Models\Picture;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['address', 'customer', 'estimate', 'production_price', 'benefit', 'start', 'end', 'reference_project'];

    public function pictures(): HasMany 
    {
        return $this->hasMany(Picture::class);
    }
}
