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
      Schema::create('answers', function (Blueprint $table) {
        $table->foreignUuid('test_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        $table->foreignUuid('statement_id')->constrained();
        $table->foreignUuid('choice_id')->constrained();
        $table->timestamps();
      });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      Schema::dropIfExists('answers');
    }
  };
