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
      Schema::create('work_basic_traits', function (Blueprint $table) {
        $table->foreignUuid('work_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        $table->foreignUuid('basic_trait_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        $table->unsignedInteger('min_value');
        $table->unsignedInteger('max_value');
      });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      Schema::dropIfExists('work_basic_traits');
    }
  };
