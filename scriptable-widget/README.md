# Counter — Scriptable Home Screen widget

A real, tappable iPhone Home Screen widget, built with [Scriptable](https://apps.apple.com/app/scriptable/id1405459188)
(free) — no Mac, Xcode, or App Store submission required.

## Install

1. Install **Scriptable** from the App Store.
2. Get `Counter.js` onto your iPhone (AirDrop, Files, Mail, Messages — any way) and use the
   **Share Sheet → Scriptable** option to import it directly as a new script. (Or: open
   Scriptable, tap **+**, and paste in the contents of `Counter.js`.)
3. Open the script once inside Scriptable to confirm it shows a preview of the widget.
4. From the Home Screen, long-press an empty area → **+** → search **Scriptable** → choose the
   **Medium** widget size → add it.
5. Long-press the new widget → **Edit Widget**:
   - **Script**: select the script you just added
   - **When Interacting**: choose **Run Script** (this is what makes the +/−/Reset taps work)

## Use

- **+** / **−** change the count by the current step
- **Reset** sets it back to 0
- Tap the "step N · tap to change" label to cycle the step through 1 → 5 → 10
- The count is stored in the iOS Keychain, so it persists between taps and reboots

## Notes

- Tapping a button briefly opens Scriptable and returns you to the Home Screen — that "flash" is
  inherent to how third-party widgets update on iOS (only Apple's own native WidgetKit apps, built
  in Xcode, get instant in-place updates). In practice it's fast, well under a second.
- This is a separate, independent deliverable from the PWA in the repo root — the PWA is a
  full-screen app icon; this is a genuine Home Screen widget.
