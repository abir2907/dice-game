import styled from "styled-components";

const RollDice = ({ currentDice, setCurrentDice }) => {
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    setCurrentDice(generateRandomNumber(1, 7));
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }
`;
