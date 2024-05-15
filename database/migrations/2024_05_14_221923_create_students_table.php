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
        $table->foreignId('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
        $table->char('nim', 10)->unique();
        $table->year('tahun_ajaran');
        $table->string('dpa')->nullable();
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
