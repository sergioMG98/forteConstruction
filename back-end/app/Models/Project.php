<?php

namespace App\Models;

use App\Models\Picture;
use App\Models\Client;
use App\Models\CustomerCompany;

use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['client_id', 'customer_company_id', 'project_name', 'project_manager', 'project_start', 'project_end', 'money_obtained', 'project_price', 'project_cost', 'profits', 'project_status', 'project_nature', 'project_address', 'comment', 'reference_project'];

    public function pictures(): HasMany 
    {
        return $this->hasMany(Picture::class);
    }

    public function client(): HasOne
    {
        return $this->hasOne(Client::class, 'id');
    }

    public function customerCompany(): HasOne
    {
        return $this->hasOne(CustomerCompany::class, 'id');
    }
    
}
