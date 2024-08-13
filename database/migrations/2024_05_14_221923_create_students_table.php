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
        $table->foreignUuid('user_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        $table->year('academic_year');
        $table->foreignUuid('supervisor_id')->constrained('users', 'id')->cascadeOnUpdate()->cascadeOnDelete();
        
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
