# Windows 10 Computer Use compatibility workaround

Recorded: 2026-09-05. Updated: 2026-09-12. This is a workstation maintenance record, not presentation content.

## Status

**Reinstalled and verified on 2026-09-12 at 13:22:59 EEST (+03:00).** A Codex update selected a new helper runtime without the compatibility DLL. The same reviewed v0.1.0 local build was installed into runtime `a708e72b10c27b59`; its loaded module and working PowerPoint screenshot were verified. The helper was restarted through the normal plugin workflow, so a full Codex restart was not necessary. The September 5 paths and scripts below are historical; use the September 12 rollback command for the current installation.

**Installed on 2026-09-05 at 18:21:15 EEST (+03:00), with explicit user authorization.** The installed DLL matches the locally built and tested hash below, the installation record was read back successfully, and the original helper executable hash is unchanged. After the user's Codex restart, the running helper loaded the local DLL and PowerPoint screenshots and a screenshot-based ribbon click were successfully verified. See the post-restart results below for the scope and limitations of this check.

## Reinstallation after Codex update — 2026-09-12

The user requested reinstalling the fix and checking for a newer release. GitHub's public releases API returned only **v0.1.0**, published on 2026-09-05; no newer published release or prerelease was listed. Its standard ZIP digest still matched the archived release hash below. No new download, source change, or rebuild was needed.

The active Computer Use skill bundle was `26.908.40834`. Normal plugin initialization started a helper in a different runtime:

```text
C:\Users\Juha\AppData\Local\OpenAI\Codex\runtimes\cua_node\a708e72b10c27b59\bin\node_modules\@oai\sky\bin\windows\codex-computer-use.exe
```

That directory contained neither `version.dll` nor an installation record. Its helper loaded only Windows' system version DLL, and a PowerPoint screenshot reproduced `SetIsBorderRequired failed: No such interface supported (0x80004002)`. This confirms the missing installation in the new runtime; it does not establish that the compatibility implementation itself had regressed.

Read-only import inspection confirmed that the new helper still imports `version.dll` and `RoGetActivationFactory`. Its SHA-256 is:

```text
BAD605EF7A800D2E2EBE2D9205DB6F9AB73EF193524392F5CAA1FA2E1A0DAE2C
```

The retained local DLL was rehashed and matched the previously reviewed, built, tested, and Defender-scanned artifact:

```text
7F32ECF8D62E65683785D9AE57ACADDE5DE9922BD80AF43C6799D3995C69B982
```

The reviewed installer was used with fresh guards for the new helper hash and path. Only processes whose executable path matched this target were stopped. Installation added the DLL and record to this directory at `2026-09-12T13:22:59.2140683+03:00`. Post-install checks confirmed the installed DLL hash and unchanged helper executable. The prior runtime was not modified or cleaned up.

After reconnecting through the normal Computer Use API, process-module inspection confirmed that the new helper loaded the local compatibility DLL. A PowerPoint screenshot succeeded and displayed the actual application home screen. A screenshot-based click on New opened the expected page, confirmed by a second successful screenshot. These checks verify capture on the updated helper; they do not replace the longer-term reliability limitations noted below. No existing presentation was opened or edited.

### Current installation and rollback commands

The new installation script is retained for audit; it refuses an existing installation:

```powershell
& 'C:\Users\Juha\.codex\visualizations\2026\09\05\01a071f0-69ee-7d62-a4a3-a232bfae4047\capture-compat-review-v0.1.0\install-reviewed-2026-09-12.ps1'
```

To uninstall from the **current September 12 runtime**, use:

```powershell
& 'C:\Users\Juha\.codex\visualizations\2026\09\05\01a071f0-69ee-7d62-a4a3-a232bfae4047\capture-compat-review-v0.1.0\rollback-2026-09-12.ps1'
```

This stops only the matching helper and uses the installation record and DLL hash to remove the two installed files. Restart Codex afterward, or reconnect through the normal plugin workflow to start a fresh helper. The older undated rollback script targets only the September 5 runtime.

If the review directory is unavailable, exit Codex and the matching helper first, then use the original package's reviewed installer with the new exact target:

```powershell
$compatHelperPath = 'C:\Users\Juha\AppData\Local\OpenAI\Codex\runtimes\cua_node\a708e72b10c27b59\bin\node_modules\@oai\sky\bin\windows\codex-computer-use.exe'
& 'C:\Users\Juha\Downloads\CodexCaptureCompat-v0.1.0-windows-x64\capture-compat\install.ps1' -HelperPath $compatHelperPath -Action Uninstall
```

Future Codex updates may select yet another runtime. Re-check the active process path, imports, failure, and hashes before installing again; do not distribute the DLL indiscriminately across runtime folders.

## Problem and diagnosis

On this machine, Computer Use could discover and launch PowerPoint, but requesting a screenshot failed twice with:

```text
SetIsBorderRequired failed: No such interface supported (0x80004002)
```

The machine runs Windows 10 Pro 22H2, build **19045.7663**. The Computer Use skill bundle observed during diagnosis was `26.901.41600`.

[Codex issue #25178](https://github.com/openai/codex/issues/25178) reports the same failure on Windows 10. [Issue #31108](https://github.com/openai/codex/issues/31108) was closed as a duplicate, not as a confirmed fix, and reports that restarting did not resolve it. Microsoft's [IsBorderRequired documentation](https://learn.microsoft.com/en-us/uwp/api/windows.graphics.capture.graphicscapturesession.isborderrequired) lists introduction in build `20348`, later than this machine's build. These sources were checked on 2026-09-05; future issue status may differ.

The likely cause is an unsupported Windows capture interface being called without a compatible fallback. A local unmodified probe reproduced `0x80004002`, strengthening this diagnosis. Restarting alone was initially suggested, but the subsequent research did not support it as a likely solution.

## Third-party project and provenance

- Project: [MagicalAstrogy/CodexComputerUseFix](https://github.com/MagicalAstrogy/CodexComputerUseFix).
- Release: [v0.1.0](https://github.com/MagicalAstrogy/CodexComputerUseFix/releases/tag/v0.1.0), standard Windows x64 package, not the trace build.
- Original archive: `C:\Users\Juha\Downloads\CodexCaptureCompat-v0.1.0-windows-x64.zip`.
- Extracted package: `C:\Users\Juha\Downloads\CodexCaptureCompat-v0.1.0-windows-x64`.
- The archive SHA-256 matched the digest reported by GitHub's release API. All **30 extracted files** were individually verified against the archive.

The release checksum establishes correspondence to the publisher's release, not publisher trust or absence of malicious code. The exact archive hash below identifies the reviewed package independently of future tag changes.

## What the fix does

The project provides a local `version.dll` proxy loaded into `codex-computer-use.exe`. It forwards ordinary version queries to the Windows system DLL and hooks the helper's imported `RoGetActivationFactory` function and relevant capture COM interfaces.

When the native border interface query returns `E_NOINTERFACE`, it supplies a fallback whose setter succeeds without disabling Windows' default capture border. Other errors, including `E_ACCESSDENIED`, remain unchanged. It also dispatches eligible frame callbacks on an MTA thread-pool worker to avoid a screenshot conversion deadlock. This changes callback timing and threading behavior.

The source enables capture hooks for `codex-computer-use.exe` and its own `compat_probe.exe`. The installer adds only these files beside the target helper:

```text
version.dll
codex-capture-compat.install.json
```

It does not replace a Windows system DLL, modify the helper executable, register a global hook, or change capture permissions. The installed DLL is unsigned and unofficial. These are findings from the reviewed implementation, not guarantees about future releases.

## Review, build, and validation

The review covered all DLL implementation files, the assembly/export forwarding definitions, build and installation scripts, and the test code executed during validation. No obvious malicious behavior, network communication, credential collection, or system-wide persistence was found in the reviewed DLL source. This was a bounded source review, not an independent security certification.

A separate copy was built locally with the existing Visual Studio 2022 Community C++ tools. The downloaded package was preserved. The locally compiled DLL is the installation candidate; its hash differs from the publisher's binary, as can occur with different build environments. Bit-for-bit reproducibility was not established.

Review/build directory:

```text
C:\Users\Juha\.codex\visualizations\2026\09\05\01a071f0-69ee-7d62-a4a3-a232bfae4047\capture-compat-review-v0.1.0
```

The following checks passed:

- Local compilation and COM tests: missing/native/error interfaces, object identity and lifetime, null arguments, and concurrent interface queries.
- Callback tests: asynchronous MTA delivery, bounded queueing, cancellation, reference lifetime, non-agile fallback, and failure diagnostics.
- Installer fixture tests: dry run, copied-file hash, repeated installation, uninstall, and preservation of an unrelated DLL.
- All eight graphics validation cases in the normal interactive Windows session: native baseline, unrelated process exclusion, real capture with the proxy, MTA without message pumping, STA without message pumping, late subscription, bitmap conversion inside a callback, and closure with an active subscription.

The first graphics attempt inside the Codex sandbox failed with `bad allocation` before completing the native baseline. The same validation script passed outside the sandbox. The native baseline intentionally expects `0x80004002`; the patched cases returned success and captured a `780 x 450` test window. This probe captures its own fixture, not the user's desktop applications.

Windows Defender then scanned the review folder, including the locally built binaries, and reported **no threats**. The custom scan used `-DisableRemediation`, meaning detection only: no quarantine, deletion, or protection-setting changes. Antivirus was enabled; the signature version reported was `1.459.58.0`.

Passing tests and a clean antivirus result reduce uncertainty but do not prove that the code is free of malware, vulnerabilities, or stability defects. The subsequent PowerPoint check below covers several captures, maximization, and a ribbon click; prolonged operation and other monitor/scaling configurations remain untested.

The detailed graphics report is stored at:

```text
C:\Users\Juha\.codex\visualizations\2026\09\05\01a071f0-69ee-7d62-a4a3-a232bfae4047\capture-compat-review-v0.1.0\capture-compat\validation\report.json
```

## Exact target and hashes

The active helper path was obtained from its running process after initializing Computer Use normally:

```text
C:\Users\Juha\AppData\Local\OpenAI\Codex\runtimes\cua_node\440c4f095d41ea30\bin\node_modules\@oai\sky\bin\windows\codex-computer-use.exe
```

Read-only import inspection confirmed that this helper imports `version.dll` and `RoGetActivationFactory`, as required by the workaround. Preflight found no existing local `version.dll` or installation record. The installer dry run targeted this exact directory.

| Artifact | SHA-256 |
|---|---|
| Publisher's v0.1.0 standard ZIP | `252219874B222BFF86813124E7E96EFBF59E4C361EE9E8F6EFD8920B20156533` |
| Publisher's DLL (not the installation candidate) | `3A8CC10F7FF31B66DF01EEC621CB38B5B8B18A71386E461A5629E627A8FBF439` |
| Locally built and tested DLL | `7F32ECF8D62E65683785D9AE57ACADDE5DE9922BD80AF43C6799D3995C69B982` |
| Original target helper executable | `7A2C7F7052EF2A8FA8B2BEF692DFA980F26392D19C64720AA42C9F4C9F480FAE` |

## Installation procedure

The prepared `install-reviewed.ps1` in the review directory checks the helper and locally built DLL against the hashes above, refuses an existing DLL or installation record, stops only helper processes whose executable path exactly matches the target, and calls the reviewed installer. It then verifies the installed DLL and confirms that the helper executable hash is unchanged.

To run that prepared procedure from PowerShell, when installation is authorized:

```powershell
& 'C:\Users\Juha\.codex\visualizations\2026\09\05\01a071f0-69ee-7d62-a4a3-a232bfae4047\capture-compat-review-v0.1.0\install-reviewed.ps1'
```

Do not run it again blindly: it deliberately refuses an existing installation. Restart Codex after installation so a fresh helper can load the DLL. Do not copy this DLL into System32 or beside the Codex application executable.

## Rollback / uninstall

The prepared rollback stops only the recorded helper process and invokes the installer's hash-checked uninstall:

```powershell
& 'C:\Users\Juha\.codex\visualizations\2026\09\05\01a071f0-69ee-7d62-a4a3-a232bfae4047\capture-compat-review-v0.1.0\rollback.ps1'
```

Then restart Codex. Uninstall removes the local proxy DLL and its installation record; it retains the original helper. It refuses removal if the recorded target path or DLL hash does not match.

If the review directory is no longer available, the verified downloaded package includes the same installer. After exiting Codex and any remaining helper using the exact target, run:

```powershell
$compatHelperPath = 'C:\Users\Juha\AppData\Local\OpenAI\Codex\runtimes\cua_node\440c4f095d41ea30\bin\node_modules\@oai\sky\bin\windows\codex-computer-use.exe'
& 'C:\Users\Juha\Downloads\CodexCaptureCompat-v0.1.0-windows-x64\capture-compat\install.ps1' -HelperPath $compatHelperPath -Action Uninstall
```

Keep the downloaded package and installation record until rollback is no longer needed. If the record is missing or a hash differs, inspect the two exact target files before taking further action. An interrupted installation can leave the DLL without a completed record; do not assume automatic rollback occurred.

Codex updates may change the helper directory or its imports. Do not install across every runtime directory or assume a new helper is compatible. Use the recorded installation path for cleanup, and re-check a new helper before any future installation.

## Post-restart verification

After the user restarts Codex:

1. Initialize Computer Use through its normal plugin API and select the returned PowerPoint window.
2. Request a screenshot and confirm the real slide is visible.
3. Repeat capture and check resizing/scaling before trusting coordinate input.
4. Record the outcome here. If capture hangs, crashes, or produces incorrect coordinates, stop app input and use the rollback procedure.

PowerPoint content has not been changed as part of this maintenance work. Direct editable `.pptx` generation remains available independently of Computer Use.

### Results after the user's restart — 2026-09-05

- Normal plugin initialization and app discovery succeeded. The existing `Presentation1 - PowerPoint` window was selected from the returned window objects.
- Read-only process-module inspection confirmed that the running helper loaded `version.dll` from the exact installation directory recorded above. System `version.dll` was also observed in the capture helper, consistent with export forwarding.
- The first screenshot returned a dark image without the previous interface error. Activating the selected PowerPoint window and recapturing produced the actual ribbon and blank title slide. For future checks, bring the target window forward before assessing a blank capture.
- Screenshot and accessibility capture both succeeded. Clicking the observed Maximize control succeeded, and a new screenshot correctly showed the enlarged window.
- A coordinate click on the View tab, using the latest screenshot ID, opened the View ribbon. Both the refreshed screenshot and accessibility tree confirmed the intended result.
- No `SetIsBorderRequired` exception or capture hang occurred in these checks. PowerPoint was left maximized on its View tab; slide content was not edited or saved.

This establishes working basic screenshot capture and UI input through the installed fix on the current desktop configuration. It does not establish long-run reliability or correctness across other displays, scaling settings, dialogs, or all PowerPoint editing operations.
