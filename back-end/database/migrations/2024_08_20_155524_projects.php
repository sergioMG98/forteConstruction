<?php

use App\Models\Client;
use App\Models\CustomerCompany;

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
            $table->foreignId('client_id')->constrained();
            $table->foreignId('customer_company_id')->constrained();
            $table->string('project_name'); // nom du projet
            $table->string('project_manager'); // chef de project
            $table->date('project_start');  // debut des travaux
            $table->date('project_end'); // fin des travaux 
            $table->integer('money_obtained'); // argent obtenu
            $table->integer('project_price'); // prix du projet
            $table->integer('project_cost'); // cout du projet
            $table->integer('profits'); // bénéfices du projet
            $table->string('project_status'); // status du projet
            $table->string('project_nature'); // nature du project
            $table->string('project_address'); // adresse du projet
            $table->text('comment')->nullable(); // commentaire sur le projet
            $table->string('reference_project'); // reference du projet
            $table->timestamps();
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

        Schema::dropIfExists('projects');
        Schema::dropIfExists('pictures');
    }
};
