# 🎮 Matching Game (Memory Game)
## 📖 Brief Description
The Matching Game is a browser-based memory game built with **HTML, CSS, and JavaScript**.  
Players flip cards to reveal symbols and try to match pairs. The game includes **win/lose logic**:
- **Win**: Match all pairs before the timer runs out.  
- **Lose**: Timer reaches zero before all pairs are matched.  

The game uses **DOM manipulation** to render cards, track moves, and display messages.  
It will be deployed online so anyone can play.

---

## 👩‍💻 User Stories
- As a user, I want to see a grid of hidden cards when the game starts.  
- As a user, I want to click on a card to reveal its symbol.  
- As a user, I want to click on a second card to try to match the first one.  
- As a user, if the two cards match, they should stay revealed.  
- As a user, if the two cards do not match, they should flip back after a short delay.  
- As a user, I want to see a timer and a move counter while I play.  
- As a user, I want to see a “Win” message if I match all pairs before the timer ends.  
- As a user, I want to see a “Lose” message if the timer runs out before I finish.  
- As a user, I want a “Restart” button to play again.

---

## 🖼️ Mockup
![Mockup (Simple Sketch) of the Matching Game](blob:https://imgur.com/a/s078Nwm)
- Link here: https://excalidraw.com/#json=E16JeY6d5sjO7snouiBAk,NCFJswX2174FHnGsmPdz9g
## 🧑‍💻 Pseudo Code (Planning Steps)
// 1. Setup

Create an array of card pairs (symbols/images).

Shuffle the array randomly.

Render the cards face-down in a grid using DOM.

// 2. Card click logic

On card click:

If no card is open → reveal card and store as firstCard.

If one card is already open → reveal card and store as secondCard.

Compare firstCard and secondCard:

If they match → keep them revealed, increase score.

If not → flip them back after 1 second, increase move counter.

// 3. Win/Lose conditions

If all pairs are matched before timer ends → show "You Win!" message.

If timer reaches 0 and not all pairs matched → show "You Lose!" message.

// 4. Timer

Start countdown when game begins (e.g., 30 seconds).

Update timer display every second.

If timer hits 0 → trigger Lose condition.

// 5. Restart

On Restart button click:

Reset timer, score, and moves.

Shuffle cards again and render face-down.# Matching-Game
