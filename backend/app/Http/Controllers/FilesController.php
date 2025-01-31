<?php

namespace App\Http\Controllers;

use App\Http\Resources\FileResource;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(asset('storage/Screenshot from 2024-12-30 15-54-58.png'));
        $files_raw = File::query()->get();
        $files = FileResource::collection($files_raw);
        return response()->json($files);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $form_data = $request->all();

        $file = $form_data["file"];
        $file_name = $file->getClientOriginalName();

        File::query()->create([
            'file_name' => $file_name,
            'path' => "storage/" . $file_name
        ]);

        Storage::disk('public')->put($file_name, file_get_contents($file));
        return response()->json("ok");
    }

    /**
     * Display the specified resource.
     */
    public function show(File $file)
    {
        if (!Storage::disk('public')->exists($file->file_name)) {
            return response()->json(['message' => 'File not found'], 404);
        }

        $file_path = Storage::disk('public')->path($file->file_name);
        $file_content = file_get_contents($file_path);
        $mime_type = Storage::disk('public')->mimeType($file->file_name);

        return response($file_content, 200, [
            'Content-Type' => $mime_type,
            'Content-Disposition' => 'attachment; filename=' . $file->file_name
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(File $file)
    {
        $file->delete();

        return response()->json('ok');
    }
}
