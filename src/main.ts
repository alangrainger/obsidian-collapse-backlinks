import { Plugin } from 'obsidian'

export default class CollapseBacklinks extends Plugin {
  async onload () {
    this.registerEvent(this.app.workspace.on('file-open', (file) => {
      if (file) {
        // Click the icon to collapse the backlinks
        // @ts-expect-error
        document.querySelector('div.embedded-backlinks [aria-label="Collapse results"]:not(.is-active)')?.click()
      }
    }))
  }
}
