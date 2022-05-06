syntax enable
filetype indent on
autocmd BufNewFile,BufRead *.podspec,Podfile,Appfile,Gymfile,Matchfile,Pluginfile,Scanfile,Fastfile,Brewfile set syntax=ruby
autocmd BufNewFile,BufRead Jenkinsfile set syntax=groovy

set cursorline
set number
set shiftwidth=4    " number of spaces to use for autoindenting
set autoindent      " auto indenting
set incsearch				" show search matches as you type
set showmatch       " set show matching parenthesis

colorscheme monokai
