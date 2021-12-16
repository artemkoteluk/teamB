import {SectionInterface} from "./section-interface";
import {StatInterface} from "./stat-interface";

export let myEvents: SectionInterface[] = [
  {
    name: 'Business Meeting',
    time: 'In 16 Minutes, Meeting Room',
  },
  {
    name: 'Ask for Vacation',
    time: '12:00 PM',
  },
  {
    name: 'Dinner with Sophie',
    time: '18:30 PM',
  },
  {
    name: 'Deadline for Project X',
    time: '21:00 PM',
  },
];
export let todos: SectionInterface[] = [
  {
    name: 'Invite Jack to play golf',
    time: 'Added: 6 hours ago',
  },
  {
    name: 'Get to know Angular more',
    time: 'Added: 2 days ago',
  },
  {
    name: 'Configure that new router',
    time: 'Added: 5 days ago',
  },
];
export let statistics: StatInterface[] = [
  {
    name: 'CPU Load',
    currentVal: 71,
    maxVal: 100,
    sign: '%',
    color: 'primary'
  },
  {
    name: 'RAM Usage',
    currentVal: 6175,
    maxVal: 16364,
    sign: 'MB',
    color: 'accent'
  },
  {
    name: 'CPU Temp',
    currentVal: 43,
    maxVal: 80,
    sign: '°',
    color: 'warn'
  },
];
export let notifications: SectionInterface[] = [
  {
    name: 'Sophie',
    time: 'Dinner? -- Are we still going out tonight?',
  },
  {
    name: 'Jack',
    time: 'Golf weekend -- Hey! You wanted to go play Golf?',
  },
  {
    name: 'Cody',
    time: 'Code Quality -- Love your newest theme, so clean and slick!',
  },
  {
    name: 'James',
    time: 'Gaming? -- You wanna throw a party this weekend?',
  },
  {
    name: 'Jessica',
    time: 'Love you... -- Hope we can see us again soon :)',
  },
];
