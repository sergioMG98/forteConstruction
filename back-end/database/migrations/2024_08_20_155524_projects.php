<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('address');
            $table->string('customer'); // client
            $table->float('estimate'); // devis
            $table->float('production_price');// prox du developpement
            $table->float('benefit'); // benefice
            $table->string('start'); // debut des travaux
            $table->string('end'); // fin des travaux 
            $table->string('reference_project'); // reference du projet
        });

        Schema::create('pictures', function(Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained(); // id du project auquel il correspond
            $table->string('lambda_picture')->nullable(); // photo lambda
            $table->string('before')->nullable(); // photo avant
            $table->string('after')->nullable(); // photo apres
            $table->boolean('homePicture'); // photo d'accueil
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
