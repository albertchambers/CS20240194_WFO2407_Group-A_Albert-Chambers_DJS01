'use strict'

// Given Parameters
const velKilometersPerHour = 10000;
const accelMetersPerSecondSquared = 3;
const timeSeconds = 3600;
const initDistanceKilometers = 0;
const initFuelKilograms = 5000;
const fuelBurnRateKilogramsPerSecond = 0.5

// Utility function to convert acceleration from m/s² to km/h²
const convertAccelToKilometersPerHourSquared = (accelMetersPerSecondSquared) => { return accelMetersPerSecondSquared * 12960 }; // 1 m/s² = 12960 km/h²

/**
 * Calculates the new velocity based on acceleration, initial velocity, and time.
 * @param {number} initVelocityKilometersPerHour
 * @param {number} accelKilometersPerHourSquared
 * @param {number} timeInSeconds
 * @returns {number}
 * @throws {Error}
 */
const calcNewVel = (initVelocityKilometersPerHour, accelKilometersPerHourSquared, timeInSeconds) => {
  if (typeof initVelocityKilometersPerHour !== 'number') {
    throw new Error('Initial velocity must be a number in km/h.');
  }
  if (typeof accelKilometersPerHourSquared !== 'number') {
    throw new Error('Acceleration must be a number in km/h².');
  }
  if (typeof timeInSeconds !== 'number') {
    throw new Error('Time must be a number in seconds.');
  }

  const timeHours = timeInSeconds / 3600;

  // Calculate new velocity: v = v₀ + at
  return initVelocityKilometersPerHour + (accelKilometersPerHourSquared * timeHours);
};

// Convert acceleration from m/s² to km/h²
const accelKilometersPerHourSquared = convertAccelToKilometersPerHourSquared(accelMetersPerSecondSquared);

// Calculations
const newDistanceKilometers = initDistanceKilometers + (velKilometersPerHour * (timeSeconds / 3600));
const remainingFuelKilograms = initFuelKilograms - (fuelBurnRateKilogramsPerSecond * timeSeconds);
const newVelocityKilometersPerHour = calcNewVel(velKilometersPerHour, accelKilometersPerHourSquared, timeSeconds);

// Outputs
console.log(`Corrected New Velocity: ${newVelocityKilometersPerHour} km/h`);
console.log(`Corrected New Distance: ${newDistanceKilometers} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelKilograms} kg`);
