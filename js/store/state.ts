import { Teams } from '@/objects/team';
import { Archive } from '@/objects/archive';
import { Results } from '@/objects/balance';
import { Players, ReservedPlayers } from '@/objects/player';

export const STORAGE_KEY = 'owbalancer';

const storage = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');

const teams: Teams = storage.teams || [];
const archive: Archive = storage.archive || [];
const players: Players = storage.players || {};
const reservedPlayers: ReservedPlayers = storage.reservedPlayers || [];
const balancerResults: Results = [];

const balancerOptions = storage.balancerOptions || {
  range: 30,
  triesCount: 25,
  adjustSr: {
    isEnabled: false,
    tank: 100,
    support: 90,
    dps: 110,
  },
  lowRankLimiter: false,
  dispersionMiminizer: false,
  disallowSecondaryRoles: false,
};

export const state = {
  teams,
  players,
  archive,
  editPlayer: '',
  balancerOptions,
  balancerResults,
  reservedPlayers,
  isArchive: false,
  isBalance: false,
  isSelection: false,
  showBalancerSR: false,
};

export type State = typeof state;
