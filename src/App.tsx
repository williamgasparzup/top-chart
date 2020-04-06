import React, { useState } from 'react';
import Bar from './charts/Bar'
import Line from './charts/Line'
import Pie from './charts/Pie'
import Button from './components/Button'
import Center from './components/Center'

enum SCREENS {
  PIE = 'PIE',
  LINE = 'LINE',
  BAR = 'BAR'
}

type Keys = keyof typeof SCREENS

const keysOf = <T extends { [key in Keys]: string }>(object: T) => {
  const keys = Object.keys(object)

  return keys as Keys[]
}

function App() {
  const [screen, setScreen] = useState<SCREENS>(SCREENS.BAR)

  const handleChangeChart = (key: Keys) => () => {
    setScreen(SCREENS[key])
  }

  const renderButtons = () => {
    return keysOf(SCREENS).map(key =>
      <Button
        selected={ screen === SCREENS[key] }
        onClick={ handleChangeChart(key) }>
        { key }
      </Button>
    )
  }

  return (
    <div>
      <Center>
        { renderButtons() }
      </Center>
      <div>
        { screen === SCREENS.BAR && <Bar /> }
        { screen === SCREENS.LINE && <Line /> }
        { screen === SCREENS.PIE && <Pie /> }
      </div>
    </div>
  );
}

export default App;
