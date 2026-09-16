// Variables used by Scriptable.
// icon-color: orange; icon-glyph: plus-circle;

const KEY_VALUE = "counter_widget_value"
const KEY_STEP = "counter_widget_step"
const STEPS = [1, 5, 10]

function getCount() {
  return Keychain.contains(KEY_VALUE) ? parseInt(Keychain.get(KEY_VALUE), 10) : 0
}
function setCount(v) {
  Keychain.set(KEY_VALUE, String(v))
}
function getStep() {
  return Keychain.contains(KEY_STEP) ? parseInt(Keychain.get(KEY_STEP), 10) : 1
}
function setStep(v) {
  Keychain.set(KEY_STEP, String(v))
}

// A tap on the widget opens this script again via a deep link carrying
// ?action=... — we apply the action before drawing, so the Home Screen
// widget appears to update in place.
const params = args.queryParameters || {}
if (params.action) {
  let count = getCount()
  let step = getStep()
  if (params.action === "inc") {
    count += step
  } else if (params.action === "dec") {
    count -= step
  } else if (params.action === "reset") {
    count = 0
  } else if (params.action === "cycleStep") {
    const idx = STEPS.indexOf(step)
    step = STEPS[(idx + 1) % STEPS.length]
    setStep(step)
  }
  setCount(count)
}

const count = getCount()
const step = getStep()
const scriptName = encodeURIComponent(Script.name())

function linkURL(action) {
  return `scriptable:///run/${scriptName}?action=${action}`
}

function addButton(stack, label, action, bg, fg) {
  const btn = stack.addStack()
  btn.backgroundColor = bg
  btn.cornerRadius = 10
  btn.setPadding(10, 14, 10, 14)
  const txt = btn.addText(label)
  txt.font = Font.boldSystemFont(18)
  txt.textColor = fg
  btn.url = linkURL(action)
}

const widget = new ListWidget()
widget.backgroundColor = new Color("#0b0b0f")
widget.setPadding(16, 16, 16, 16)

const countText = widget.addText(String(count))
countText.font = Font.boldSystemFont(48)
countText.textColor = Color.white()
countText.centerAlignText()

const stepStack = widget.addStack()
stepStack.centerAlignContent()
const stepText = stepStack.addText(`step ${step}  ·  tap to change`)
stepText.font = Font.systemFont(11)
stepText.textColor = new Color("#8a8a93")
stepStack.url = linkURL("cycleStep")

widget.addSpacer(12)

const row = widget.addStack()
row.centerAlignContent()
addButton(row, "−", "dec", new Color("#17171d"), Color.white())
row.addSpacer(8)
addButton(row, "Reset", "reset", new Color("#17171d"), new Color("#8a8a93"))
row.addSpacer(8)
addButton(row, "+", "inc", new Color("#ff5a3c"), new Color("#1a0a05"))

widget.refreshAfterDate = new Date()

if (config.runsInWidget) {
  Script.setWidget(widget)
} else {
  widget.presentMedium()
}
Script.complete()
