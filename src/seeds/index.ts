import db from '../config/connection.js';
import { User } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomName, getRandomEmail } from './data.js';

try {
  await db();
  await cleanDB();

  // Create empty array to hold the students
  const users = [];

  // Loop 4 times -- add user to the users array
  for (let i = 0; i < 4; i++) {
    // Get some random email
    const email = getRandomEmail();

    const username = getRandomName();

    users.push({
      username,
      email,
    });
  }

  // Add users to the collection and await the results
  console.log(users);
  const userData = await User.create(users);

  // Add thoughts to the collection and await the results
  // await Thought.create({
  //   "thoughtText": "Here's a cool thought...",
  //    "username": "lernantino",
  //    "userId": "5edff358a0fcb779aa7b118b"
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(userData);
  console.info('Seeding complete! 🌱');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}

