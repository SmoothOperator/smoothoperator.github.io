<?php
$counterFile = 'counter.txt';

// Check if the file exists
if (!file_exists($counterFile)) {
    // If not, create it and initialize with 0
    file_put_contents($counterFile, '0');
}

// Read the current hit count
$hits = (int)file_get_contents($counterFile);

// Increment the hit count
$hits++;

// Write the new hit count back to the file
file_put_contents($counterFile, $hits);

// Return the new hit count
echo $hits;
?>
