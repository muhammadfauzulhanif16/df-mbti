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
      Schema::create('statements', function (Blueprint $table) {
        $table->uuid('id')->primary();
        $table->string('name');
        $table->foreignUuid('indicator_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        $table->foreignUuid('basic_trait_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        $table->timestamps();
      });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      Schema::dropIfExists('statements');
    }
  };
