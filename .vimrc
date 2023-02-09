syntax enable
filetype indent on
autocmd BufNewFile,BufRead *.podspec,Podfile,Appfile,Gymfile,Matchfile,Pluginfile,Scanfile,Fastfile,Brewfile set syntax=ruby
autocmd BufNewFile,BufRead Jenkinsfile set syntax=groovy

set cursorline
set number
set shiftwidth=4	" number of spaces to use for autoindenting
set autoindent		" auto indenting
set incsearch		" show search matches as you type
set showmatch		" set show matching parenthesis

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'joshdick/onedark.vim'

call vundle#end()            " required
filetype plugin indent on    " required

if has("gui_running")
    colorscheme onedark
    set background=dark
endif

set t_Co=256			" colors
let g:airline_theme='onedark'	" airline theme
