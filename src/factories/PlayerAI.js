import Player from './Player';

export default class PlayerAI extends Player {
    generateAttack() {
        // Generate random coordinates for the computer's move
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return([x,y])
    }
}