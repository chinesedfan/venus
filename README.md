The original project has been abandoned for more than 2 years. But because of [hsrecorder](https://github.com/chinesedfan/hsrecorder), I discover it and want to reorganize it. If someday the author or someone else wants to develop this project again, hope my documents can help.

Branches
master: the reorganized result
author: the original master branch
dw-venus: the customized branch by our Data Warehouse colleages
issueX: refer to [issues](https://github.com/chinesedfan/venus/issues)

Folders
app: real applications based on this project
build: combo tools, config files and generated results
	tool: the makefile is 'combo.js'
example: simple examples
lib: depended libraries
site: a website used to introduce this project
src: source files
	canvas: the first version 'svg' and unused (I guess)
	common: common files
	heatmap: for drawing heatmap
	svg: for drawing basic charts
	topology: for drawing topology charts
test: unit test files

Changes
Mainly I delete files that I think non-sense, like .DS_Store files, history generated files, empty files and duplicated files. For example, 'src/canvas/dpchart.js' is nearly the same with 'src/canvas/canvaschart.js', except some exposed interfaces for testing. And 'src/svg/svgchart_rebuild.js', 'svg/topology/topology_rebuild.js' behave the same like 'src/svg/svgchart.js', 'svg/topology/topology.js'. The author just created them in a certain commit and stopped to update the original one.

Some new functionailies are also introduced, as described in [issue #3](https://github.com/chinesedfan/venus/issues/3). At last, folders app/example/test are updated, but no all tests can be passed, as deprecated methods are tested.

Notice
I didn't rebuild the file 'build/canvaschart.js' and 'build/topology.js' after their source files have been updated.
The folder 'site' still has some used or duplicated files.