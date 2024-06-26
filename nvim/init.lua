-- GENERAL
local opt = vim.opt

-- Show Line Numbers
opt.number = true

-- Show which line your cursor is on
opt.cursorline = true

-- Share pasteboard with MacOS
opt.clipboard:append("unnamedplus")

-- Disable swapfile
opt.swapfile = false

-- File Mappings
vim.filetype.add({ filename = { JenkinsFile = "groovy" }})
vim.filetype.add({ filename = { Fastfile = "ruby" }})
vim.filetype.add({ filename = { Scanfile = "ruby" }})
vim.filetype.add({ filename = { Appfile = "ruby" }})
vim.filetype.add({ filename = { Matchfile = "ruby" }})
vim.filetype.add({ filename = { Gymfile = "ruby" }})

-- Lazy Plugin Manager
local lazy = {}

function lazy.install(path)
  if not vim.loop.fs_stat(path) then
    print('Installing lazy.nvim....')
    vim.fn.system({
      'git',
      'clone',
      '--filter=blob:none',
      'https://github.com/folke/lazy.nvim.git',
      '--branch=stable', -- latest stable release
      path,
    })
  end
end

function lazy.setup(plugins)
  if vim.g.plugins_ready then
    return
  end

  -- You can "comment out" the line below after lazy.nvim is installed
  -- lazy.install(lazy.path)

  opt.rtp:prepend(lazy.path)

  require('lazy').setup(plugins, lazy.opts)
  vim.g.plugins_ready = true
end

lazy.path = vim.fn.stdpath('data') .. '/lazy/lazy.nvim'
lazy.opts = {}

lazy.setup({
	{ "rebelot/kanagawa.nvim" }
})

-- A E S T H E T I C S
opt.termguicolors = true
vim.cmd("colorscheme kanagawa-wave")
