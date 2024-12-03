const usernames = [
    "john_doe22",
    "sarah_1990",
    "mike_taylor77",
    "emily.smith99",
    "alex_jones2024",
    "robert_wilson88",
    "linda_martin33",
    "chris_brown45",
    "nancy_davis23",
    "katie_lee77",
    "jake_white34",
    "maria_smith68",
    "david_brown56",
    "laura_clark12",
    "benjamin_hall11",
    "sophia_adams64",
    "charles_king56",
    "amanda_carter99"
];

const appEmails = [
  'testuser1@email.com',
  'testuser2@email.com',
  'sample.email3@email.com',
  'demo.user4@email.com',
  'user12345@email.com',
  'mailbox6789@email.com',
  'user5678@email.com',
  'account9876@email.com',
  'testaccount10@email.com',
  'samplemail11@email.com',
  'emailtest123@email.com',
  'mailbox0987@email.com',
  'test.email345@email.com',
  'randombox678@email.com',
  'userbox1098@email.com',
  'emailtest567@email.com',
  'fakeaccount234@email.com',
  'randomemail876@email.com',
];

// Get a random item given an array
let currentIndex = 0;  
export const getNextArrItem = (arr: any) => {
  if (arr.length === 0) return null;

  const nextItem = arr[currentIndex];
  currentIndex = (currentIndex + 1) % arr.length;  // Wrap around if we reach the end of the array

  return nextItem;
};

// Gets a username
export const getRandomName =() =>
  `${getNextArrItem(usernames)}`;

// Function to get an email that we can add to user object.
export const getRandomEmail = () => 
  `${getNextArrItem(appEmails)}`;
;
