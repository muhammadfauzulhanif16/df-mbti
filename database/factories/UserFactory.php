<?php
  
  namespace Database\Factories;
  
  use App\Models\User;
  use Illuminate\Database\Eloquent\Factories\Factory;
  
  /**
   * @extends Factory<User>
   */
  class UserFactory extends Factory
  {
    /**
     * The current password being used by the factory.
     */
    
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
      $gender = $this->faker->randomElement(['male', 'female']);
      $full_name = $this->faker->name($gender);
      $currentYear = date('Y');
      $year = $this->faker->numberBetween(1900, $currentYear); // Generate a year
      $remainingDigits = $this->faker->randomNumber(6, true); // Generate the remaining 6 digits
      $id_number = $year . $remainingDigits; // Concatenate year with the remaining digits
      
      return [
        'full_name' => $full_name,
        'id_number' => $id_number,
        'avatar' => $this->faker->imageUrl(640, 480, $full_name, false),
        'phone_number' => $this->faker->phoneNumber,
        'email' => strtolower(str_replace(' ', '.', $full_name)) . '@mbti.id',
        'password' => $id_number,
      ];
    }
    
    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
      return $this->state(fn(array $attributes) => [
        'email_verified_at' => null,
      ]);
    }
  }
