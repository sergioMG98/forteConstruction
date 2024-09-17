<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'client_id' => fake(),
            'customer_company_id' => fake(),
            'project_name' => fake()->name(),
            'project_manager' => fake()->name(),
            'project_start' => fake()->name(),
            'project_end' => fake()->name(),
            'money_obtained' => fake()->name(),
            'project_price' => fake()->name(),
            'project_cost' => fake()->name(),
            'profits' => fake()->name(),
            'project_status' => fake()->name(),
            'project_nature' => fake()->name(),
            'project_address' => fake()->name(),
            'comment' => fake()->text(),
            'reference_project' => fake()->name(),
        ];
    }
}
