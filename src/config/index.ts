import Phaser from 'phaser'
import SCENES from '@scenes/index'

const PHASER_CONFIG: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  title: 'Phaser RPG',
  version: '0.0.1',
  scene: SCENES,
  scale: {
    mode: Phaser.Scale.CENTER_BOTH,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  pixelArt: true
}

export default PHASER_CONFIG
