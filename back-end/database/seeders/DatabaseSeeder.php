<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\CustomerCompany;
use App\Models\Project;
use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'azertyuiop1A#'
        ]);

        Client::factory()->create([
            'lastname' => "norris",
            'firstname' => "chuck",
            'email' => "chuck.norris@gmail.com",
            'phone' => "943 344 321 ",
        ]);

        CustomerCompany::factory()->create([
            "name" => "chucky",
            "adresse" => "23 avenue deChuck",
            "siret" => "23D3432fev23S5",
        ]);

        Project::factory()->count(20)->create([
            'client_id' => 1,
            'customer_company_id' => 1,
            'project_name' => "Norris castle ",
            'project_manager' => "Antonio F",
            'project_start' => "2022-07-14",
            'project_end' => "2023-07-29",
            'money_obtained' => 1500000,
            'project_price' => 2000000,
            'project_cost' => 1700000,
            'profits' => -500000,
            'project_status' => "in_progress",
            'project_nature' => "construction batiment",
            'project_address' => "22 rue jean-Charles",
            'comment' => "test de commentaire",
            'reference_project' => "ezrec234evez32",
        ]);
    }
}
