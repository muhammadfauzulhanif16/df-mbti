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
        $table->foreignUuid('statement_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        $table->foreignUuid('choice_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
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
