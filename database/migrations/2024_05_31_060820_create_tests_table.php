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
      Schema::create('tests', function (Blueprint $table) {
        $table->uuid('id')->primary();
        $table->foreignUuid('user_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        $table->time('time');
        $table->foreignUuid('work_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        $table->string('personality')->nullable()->default(null);
        $table->timestamps();
      });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      Schema::dropIfExists('tests');
    }
  };
