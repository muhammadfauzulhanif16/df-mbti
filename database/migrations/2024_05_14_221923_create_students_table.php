<?php
  
  use Illuminate\Database\Migrations\Migration;
  use Illuminate\Database\Schema\Blueprint;
  use Illuminate\Support\Facades\Schema;
  
  return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      Schema::create('students', function (Blueprint $table) {
        $table->foreignUuid('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
        $table->char('student_id_number', 10)->unique();
        $table->year('academic_year');
        $table->string('supervisor');
      });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      Schema::dropIfExists('students');
    }
  };
