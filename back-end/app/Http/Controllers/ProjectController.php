<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Picture;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ProjectController extends Controller
{
    // recupére les images pour la home
    public function getHomePicture(){

        try {

            $pictures = DB::table('pictures')
            ->where('homePicture', 1)
            ->get();

            $picturesFiltered = [];

            foreach ($pictures as $key => $value) {
                array_push($picturesFiltered, 'http://127.0.0.1:8000/storage/'.$value->lambda_picture);
            }

            if (count($picturesFiltered) != 0 ) {
                return response()->json([
                    'status' => 200,
                    'pictures' => $picturesFiltered
                ]);
            } else {
                return response()->json([
                    'status' => 404
                ]);
            }
            

        } catch (\Throwable $th) {
            
            return response()->json([
                'status' => 500,
                'errors' => $th
            ]);
        }

    }

    // récupére la premiere image de chaque project + id
    public function getFirstPictureProject() {
        try {

            $picturesFiltered = [];

            // récupération des projets
            $pictures = DB::table('projects')
                ->get();

            
            foreach ($pictures as $key => $value) {
                //récupére les images des projects
                $values = Project::find($value->id)->pictures;
                
                // prend la premiere image et id du  projet
                $valuesFiltered = (object) array(
                    "project_id" => $values[0]->project_id,
                    "first_picture" => 'http://127.0.0.1:8000/storage/'.$values[0]->lambda_picture
                );

                array_push($picturesFiltered, $valuesFiltered );
            }
            
            if (count($picturesFiltered) != 0) {
                return response()->json([
                    'status' => 200,
                    'pictures' => $picturesFiltered
                ]);
    
            } else {
                return response()->json([
                    'status' => 404,
                ]);
    
            }
            
            
        } catch (\Throwable $th) {

            return response()->json([
                'status' => 500,
                'errors' => $th
            ]);
        }
    }

    // récupére certaines information du projet precis
    public function getFewDataProject(Request $request){

        try {
            $projectPictures = DB::table('pictures')
                ->where('project_id', $request->project_id)
                ->get();

            $picturesFiltered = [];
            
            foreach ($projectPictures as $key => $value) {
                $valueFiltered = (object) array (
                    "lambda" => $value->lambda_picture != null ? 'http://127.0.0.1:8000/storage/'.$value->lambda_picture : null,
                    "before" => 'http://127.0.0.1:8000/storage/'.$value->before,
                    "after" => 'http://127.0.0.1:8000/storage/'.$value->after
                );

                array_push($picturesFiltered, $valueFiltered);
            }
            
            if (count($picturesFiltered) != 0) {
                return response()->json([
                    "status" => 200,
                    "pictures" => $picturesFiltered
                ]);

            } else {
                
                return response()->json([
                    "status" => 404,
                ]);
            }
            

        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'errors' => $th,
            ]);
        }
    
    }
}
