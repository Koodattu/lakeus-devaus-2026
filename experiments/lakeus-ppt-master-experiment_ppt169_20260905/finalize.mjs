import fs from 'node:fs/promises';
import path from 'node:path';
import { finalizePresentation } from '/Users/koodattu/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations/container_tools/artifact_tool_utils.mjs';
const workspaceDir = '/Users/koodattu/Documents/GitHub/lakeus-devaus-2026';
const project = path.join(workspaceDir, 'experiments/lakeus-ppt-master-experiment_ppt169_20260905');
const skill = '/Users/koodattu/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations';
const files = (await fs.readdir(path.join(project, 'exports'))).filter(x=>x.endsWith('.pptx')&&!x.startsWith('~$')).sort();
const result = await finalizePresentation({
  workspaceDir,
  candidatePath: path.join(project, 'exports', files.at(-1)),
  finalPath: path.join(workspaceDir, 'output/lakeus-devaus-2026-ppt-master.pptx'),
  pythonExecutable: '/Users/koodattu/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3',
  integrityValidatorPath: path.join(skill, 'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath: path.join(skill, 'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs: ['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit','--validate-bullet-geometry'],
  explicitTotalSlideCount: 23,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
  fontPolicy: {basis:'design',families:['Arial','Courier New']},
  verifyArtifactToolImport: true,
  receiptPath: path.join(project, 'validation/finalizer.json'),
});
console.log(JSON.stringify(result));
