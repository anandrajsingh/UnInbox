export const unUi = {
  // Elements
  avatar: {
    wrapper: 'relative inline-flex items-center justify-center',
    background: 'bg-gray-100 dark:bg-gray-800',
    rounded: 'rounded-full',
    placeholder:
      'font-medium leading-none text-gray-900 dark:text-white truncate',
    size: {
      '3xs': 'h-4 w-4 text-[8px]',
      '2xs': 'h-5 w-5 text-[10px]',
      xs: 'h-6 w-6 text-[11px]',
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-12 w-12 text-base',
      xl: 'h-14 w-14 text-lg',
      '2xl': 'h-16 w-16 text-xl',
      '3xl': 'h-20 w-20 text-2xl'
    },
    chip: {
      base: 'absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium',
      background: 'bg-{color}-500 dark:bg-{color}-400',
      position: {
        'top-right': 'top-0 right-0',
        'bottom-right': 'bottom-0 right-0',
        'top-left': 'top-0 left-0',
        'bottom-left': 'bottom-0 left-0'
      },
      size: {
        '3xs': 'h-[4px] min-w-[4px] text-[4px] p-px',
        '2xs': 'h-[5px] min-w-[5px] text-[5px] p-px',
        xs: 'h-1.5 min-w-[0.375rem] text-[6px] p-px',
        sm: 'h-2 min-w-[0.5rem] text-[7px] p-0.5',
        md: 'h-2.5 min-w-[0.625rem] text-[8px] p-0.5',
        lg: 'h-3 min-w-[0.75rem] text-[10px] p-0.5',
        xl: 'h-3.5 min-w-[0.875rem] text-[11px] p-1',
        '2xl': 'h-4 min-w-[1rem] text-[12px] p-1',
        '3xl': 'h-5 min-w-[1.25rem] text-[14px] p-1'
      }
    },
    default: {
      size: 'sm',
      chipColor: null,
      chipPosition: 'top-right'
    }
  },
  badge: {
    base: 'inline-flex items-center',
    rounded: 'rounded-md',
    font: 'font-medium',
    size: {
      xs: 'text-xs px-1.5 py-0.5',
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-2 py-1',
      lg: 'text-sm px-2.5 py-1.5'
    },
    color: {},
    variant: {
      solid:
        'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-10 dark:ring-opacity-20'
    },
    default: {
      size: 'sm',
      variant: 'solid',
      color: 'primary'
    }
  },
  button: {
    base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
    font: 'font-medium',
    rounded: 'rounded-md',
    size: {
      '2xs': 'text-xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-sm',
      xl: 'text-base'
    },
    gap: {
      '2xs': 'gap-x-1',
      xs: 'gap-x-1.5',
      sm: 'gap-x-1.5',
      md: 'gap-x-2',
      lg: 'gap-x-2.5',
      xl: 'gap-x-2.5'
    },
    padding: {
      '2xs': 'px-2 py-1',
      xs: 'px-2.5 py-1.5',
      sm: 'px-2.5 py-1.5',
      md: 'px-3 py-2',
      lg: 'px-3.5 py-2.5',
      xl: 'px-3.5 py-2.5'
    },
    square: {
      '2xs': 'p-1',
      xs: 'p-1.5',
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-2.5',
      xl: 'p-2.5'
    },
    color: {
      white: {
        solid:
          'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        ghost:
          'text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
      },
      gray: {
        solid:
          'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        ghost:
          'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        link: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
      },
      black: {
        solid:
          'shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        link: 'text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
      }
    },
    variant: {
      solid:
        'shadow-sm text-white dark:text-gray-900 bg-sand-5 hover:bg-{color}-600 disabled:bg-{color}-500 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
      outline:
        'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
      soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
      ghost:
        'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
      link: 'text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400'
    },
    icon: {
      base: 'flex-shrink-0',
      size: {
        '2xs': 'h-4 w-4',
        xs: 'h-4 w-4',
        sm: 'h-5 w-5',
        md: 'h-5 w-5',
        lg: 'h-5 w-5',
        xl: 'h-6 w-6'
      }
    },
    default: {
      size: 'sm',
      variant: 'solid',
      color: 'primary',
      loadingIcon: 'i-heroicons-arrow-path-20-solid'
    }
  },
  dropdown: {
    wrapper: 'relative inline-flex text-left rtl:text-right',
    container: 'z-20',
    width: 'w-48',
    height: '',
    background: 'bg-white dark:bg-gray-800',
    shadow: 'shadow-lg',
    rounded: 'rounded-md',
    ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
    base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
    divide: 'divide-y divide-gray-200 dark:divide-gray-700',
    padding: 'p-1',
    item: {
      base: 'group flex items-center gap-2 w-full',
      rounded: 'rounded-md',
      padding: 'px-2 py-1.5',
      size: 'text-sm',
      active: 'bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white',
      inactive: 'text-gray-700 dark:text-gray-200',
      disabled: 'cursor-not-allowed opacity-50',
      icon: {
        base: 'flex-shrink-0 h-4 w-4',
        active: 'text-gray-500 dark:text-gray-400',
        inactive: 'text-gray-400 dark:text-gray-500'
      },
      avatar: {
        base: 'flex-shrink-0',
        size: '3xs'
      },
      shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto'
    },
    transition: {
      enterActiveClass: 'transition duration-100 ease-out',
      enterFromClass: 'transform scale-95 opacity-0',
      enterToClass: 'transform scale-100 opacity-100',
      leaveActiveClass: 'transition duration-75 ease-in',
      leaveFromClass: 'transform scale-100 opacity-100',
      leaveToClass: 'transform scale-95 opacity-0'
    },
    popper: {
      placement: 'bottom-end',
      strategy: 'fixed'
    }
  },
  accordion: {
    wrapper: 'w-full flex flex-col',
    item: {
      base: '',
      size: 'text-sm',
      color: 'text-gray-500 dark:text-gray-400',
      padding: 'pt-1.5 pb-3',
      icon: 'ms-auto transform transition-transform duration-200'
    },
    transition: {
      enterActiveClass:
        'overflow-hidden transition-[height] duration-200 ease-out',
      leaveActiveClass:
        'overflow-hidden transition-[height] duration-200 ease-out'
    },
    default: {
      openIcon: 'i-heroicons-chevron-down-20-solid',
      closeIcon: '',
      class: 'mb-1.5 w-full',
      variant: 'soft'
    }
  },
  icon: {},
  kbd: {
    base: 'inline-flex items-center justify-center text-gray-900 dark:text-white',
    padding: 'px-1',
    size: {
      xs: 'h-4 min-w-[16px] text-[10px]',
      sm: 'h-5 min-w-[20px] text-[11px]',
      md: 'h-6 min-w-[24px] text-[12px]'
    },
    rounded: 'rounded',
    font: 'font-medium font-sans',
    background: 'bg-gray-100 dark:bg-gray-800',
    ring: 'ring-1 ring-gray-300 dark:ring-gray-700 ring-inset',
    default: {
      size: 'sm'
    }
  },

  //Forms
  input: {
    wrapper: 'relative',
    base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
    rounded: 'rounded-md',
    placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
    size: {
      '2xs': 'text-xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-sm',
      xl: 'text-base'
    },
    gap: {
      '2xs': 'gap-x-1',
      xs: 'gap-x-1.5',
      sm: 'gap-x-2',
      md: 'gap-x-2',
      lg: 'gap-x-2',
      xl: 'gap-x-2'
    },
    padding: {
      '2xs': 'px-2 py-1',
      xs: 'px-2.5 py-1.5',
      sm: 'px-2.5 py-1.5',
      md: 'px-3 py-2',
      lg: 'px-3.5 py-2.5',
      xl: 'px-3.5 py-2.5'
    },
    leading: {
      padding: {
        '2xs': 'ps-7',
        xs: 'ps-8',
        sm: 'ps-9',
        md: 'ps-10',
        lg: 'ps-11',
        xl: 'ps-12'
      }
    },
    trailing: {
      padding: {
        '2xs': 'pe-7',
        xs: 'pe-8',
        sm: 'pe-9',
        md: 'pe-10',
        lg: 'pe-11',
        xl: 'pe-12'
      }
    },
    color: {
      white: {
        outline:
          'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
      },
      gray: {
        outline:
          'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
      }
    },
    variant: {
      outline:
        'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
      none: 'bg-transparent focus:ring-0 focus:shadow-none'
    },
    icon: {
      base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
      color: 'text-{color}-500 dark:text-{color}-400',
      size: {
        '2xs': 'h-4 w-4',
        xs: 'h-4 w-4',
        sm: 'h-5 w-5',
        md: 'h-5 w-5',
        lg: 'h-5 w-5',
        xl: 'h-6 w-6'
      },
      leading: {
        wrapper: 'absolute inset-y-0 start-0 flex items-center',
        pointer: 'pointer-events-none',
        padding: {
          '2xs': 'ps-2',
          xs: 'ps-2.5',
          sm: 'ps-2.5',
          md: 'ps-3',
          lg: 'ps-3.5',
          xl: 'ps-3.5'
        }
      },
      trailing: {
        wrapper: 'absolute inset-y-0 end-0 flex items-center',
        pointer: 'pointer-events-none',
        padding: {
          '2xs': 'pe-2',
          xs: 'pe-2.5',
          sm: 'pe-2.5',
          md: 'pe-3',
          lg: 'pe-3.5',
          xl: 'pe-3.5'
        }
      }
    },
    default: {
      size: 'sm',
      color: 'white',
      variant: 'outline',
      loadingIcon: 'i-heroicons-arrow-path-20-solid'
    }
  },
  textarea: {
    wrapper: 'relative',
    base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
    rounded: 'rounded-md',
    placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
    size: {
      '2xs': 'text-xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-sm',
      xl: 'text-base'
    },
    gap: {
      '2xs': 'gap-x-1',
      xs: 'gap-x-1.5',
      sm: 'gap-x-2',
      md: 'gap-x-2',
      lg: 'gap-x-2',
      xl: 'gap-x-2'
    },
    padding: {
      '2xs': 'px-2 py-1',
      xs: 'px-2.5 py-1.5',
      sm: 'px-2.5 py-1.5',
      md: 'px-3 py-2',
      lg: 'px-3.5 py-2.5',
      xl: 'px-3.5 py-2.5'
    },
    leading: {
      padding: {
        '2xs': 'ps-7',
        xs: 'ps-8',
        sm: 'ps-9',
        md: 'ps-10',
        lg: 'ps-11',
        xl: 'ps-12'
      }
    },
    trailing: {
      padding: {
        '2xs': 'pe-7',
        xs: 'pe-8',
        sm: 'pe-9',
        md: 'pe-10',
        lg: 'pe-11',
        xl: 'pe-12'
      }
    },
    color: {
      white: {
        outline:
          'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
      },
      gray: {
        outline:
          'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
      }
    },
    variant: {
      outline:
        'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
      none: 'bg-transparent focus:ring-0 focus:shadow-none'
    },
    icon: {
      base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
      color: 'text-{color}-500 dark:text-{color}-400',
      size: {
        '2xs': 'h-4 w-4',
        xs: 'h-4 w-4',
        sm: 'h-5 w-5',
        md: 'h-5 w-5',
        lg: 'h-5 w-5',
        xl: 'h-6 w-6'
      },
      leading: {
        wrapper: 'absolute inset-y-0 start-0 flex items-center',
        pointer: 'pointer-events-none',
        padding: {
          '2xs': 'ps-2',
          xs: 'ps-2.5',
          sm: 'ps-2.5',
          md: 'ps-3',
          lg: 'ps-3.5',
          xl: 'ps-3.5'
        }
      },
      trailing: {
        wrapper: 'absolute inset-y-0 end-0 flex items-center',
        pointer: 'pointer-events-none',
        padding: {
          '2xs': 'pe-2',
          xs: 'pe-2.5',
          sm: 'pe-2.5',
          md: 'pe-3',
          lg: 'pe-3.5',
          xl: 'pe-3.5'
        }
      }
    },
    default: {
      size: 'sm',
      color: 'white',
      variant: 'outline'
    }
  },
  select: {
    wrapper: 'relative',
    base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
    rounded: 'rounded-md',
    placeholder: 'text-gray-900 dark:text-white',
    size: {
      '2xs': 'text-xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-sm',
      xl: 'text-base'
    },
    gap: {
      '2xs': 'gap-x-1',
      xs: 'gap-x-1.5',
      sm: 'gap-x-2',
      md: 'gap-x-2',
      lg: 'gap-x-2',
      xl: 'gap-x-2'
    },
    padding: {
      '2xs': 'px-2 py-1',
      xs: 'px-2.5 py-1.5',
      sm: 'px-2.5 py-1.5',
      md: 'px-3 py-2',
      lg: 'px-3.5 py-2.5',
      xl: 'px-3.5 py-2.5'
    },
    leading: {
      padding: {
        '2xs': 'ps-7',
        xs: 'ps-8',
        sm: 'ps-9',
        md: 'ps-10',
        lg: 'ps-11',
        xl: 'ps-12'
      }
    },
    trailing: {
      padding: {
        '2xs': 'pe-7',
        xs: 'pe-8',
        sm: 'pe-9',
        md: 'pe-10',
        lg: 'pe-11',
        xl: 'pe-12'
      }
    },
    color: {
      white: {
        outline:
          'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
      },
      gray: {
        outline:
          'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400'
      }
    },
    variant: {
      outline:
        'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
      none: 'bg-transparent focus:ring-0 focus:shadow-none'
    },
    icon: {
      base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
      color: 'text-{color}-500 dark:text-{color}-400',
      size: {
        '2xs': 'h-4 w-4',
        xs: 'h-4 w-4',
        sm: 'h-5 w-5',
        md: 'h-5 w-5',
        lg: 'h-5 w-5',
        xl: 'h-6 w-6'
      },
      leading: {
        wrapper: 'absolute inset-y-0 start-0 flex items-center',
        pointer: 'pointer-events-none',
        padding: {
          '2xs': 'ps-2',
          xs: 'ps-2.5',
          sm: 'ps-2.5',
          md: 'ps-3',
          lg: 'ps-3.5',
          xl: 'ps-3.5'
        }
      },
      trailing: {
        wrapper: 'absolute inset-y-0 end-0 flex items-center',
        pointer: 'pointer-events-none',
        padding: {
          '2xs': 'pe-2',
          xs: 'pe-2.5',
          sm: 'pe-2.5',
          md: 'pe-3',
          lg: 'pe-3.5',
          xl: 'pe-3.5'
        }
      }
    },
    default: {
      size: 'sm',
      color: 'white',
      variant: 'outline',
      loadingIcon: 'i-heroicons-arrow-path-20-solid',
      trailingIcon: 'i-heroicons-chevron-down-20-solid'
    }
  },
  selectMenu: {
    wrapper: 'relative',
    container: 'z-20',
    width: 'w-full',
    height: 'max-h-60',
    base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
    background: 'bg-white dark:bg-gray-800',
    shadow: 'shadow-lg',
    rounded: 'rounded-md',
    padding: 'p-1',
    ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
    input:
      'block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 focus:border-inherit sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
    option: {
      base: 'cursor-default select-none relative flex items-center justify-between gap-1',
      rounded: 'rounded-md',
      padding: 'px-2 py-1.5',
      size: 'text-sm',
      color: 'text-gray-900 dark:text-white',
      container: 'flex items-center gap-2 min-w-0',
      active: 'bg-gray-100 dark:bg-gray-900',
      inactive: '',
      selected: 'pe-7',
      disabled: 'cursor-not-allowed opacity-50',
      empty: 'text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5',
      icon: {
        base: 'flex-shrink-0 h-4 w-4',
        active: 'text-gray-900 dark:text-white',
        inactive: 'text-gray-400 dark:text-gray-500'
      },
      selectedIcon: {
        wrapper: 'absolute inset-y-0 end-0 flex items-center',
        padding: 'pe-2',
        base: 'h-4 w-4 text-gray-900 dark:text-white flex-shrink-0'
      },
      avatar: {
        base: 'flex-shrink-0',
        size: '3xs'
      },
      chip: {
        base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full'
      }
    },
    transition: {
      leaveActiveClass: 'transition ease-in duration-100',
      leaveFromClass: 'opacity-100',
      leaveToClass: 'opacity-0'
    },
    popper: {
      placement: 'bottom-end'
    },
    default: {
      selectedIcon: 'i-heroicons-check-20-solid'
    }
  },
  checkbox: {
    wrapper: 'relative flex items-start',
    base: 'h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
    rounded: 'rounded',
    color: 'text-{color}-500 dark:text-{color}-400',
    background: 'bg-white dark:bg-gray-900',
    border: 'border border-gray-300 dark:border-gray-700',
    ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
    label: 'font-medium text-gray-700 dark:text-gray-200',
    required: 'text-red-500 dark:text-red-400',
    help: 'text-gray-500 dark:text-gray-400',
    default: {
      color: 'primary'
    }
  },
  radio: {
    wrapper: 'relative flex items-start',
    base: 'h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
    color: 'text-{color}-500 dark:text-{color}-400',
    background: 'bg-white dark:bg-gray-900',
    border: 'border border-gray-300 dark:border-gray-700',
    ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
    label: 'font-medium text-gray-700 dark:text-gray-200',
    required: 'text-red-500 dark:text-red-400',
    help: 'text-gray-500 dark:text-gray-400',
    default: {
      color: 'primary'
    }
  },
  toggle: {
    base: 'relative inline-flex h-5 w-9 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
    rounded: 'rounded-full',
    ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
    active: 'bg-{color}-500 dark:bg-{color}-400',
    inactive: 'bg-gray-200 dark:bg-gray-700',
    container: {
      base: 'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200',
      active: 'translate-x-4 rtl:-translate-x-4',
      inactive: 'translate-x-0 rtl:-translate-x-0'
    },
    icon: {
      base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
      active: 'opacity-100 ease-in duration-200',
      inactive: 'opacity-0 ease-out duration-100',
      on: 'h-3 w-3 text-{color}-500 dark:text-{color}-400',
      off: 'h-3 w-3 text-gray-400 dark:text-gray-500'
    },
    default: {
      onIcon: null,
      offIcon: null,
      color: 'primary'
    }
  },
  range: {
    wrapper: 'relative w-full',
    base: 'w-full absolute appearance-none cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50 focus:outline-none [&::-webkit-slider-runnable-track]:h-full [&::-moz-slider-runnable-track]:h-full peer',
    background: 'bg-gray-200 dark:bg-gray-700',
    rounded: 'rounded-lg',
    ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
    progress: {
      base: 'absolute inset-0 h-full pointer-events-none peer-disabled:bg-opacity-50',
      rounded: 'rounded-s-lg',
      background: 'bg-{color}-500 dark:bg-{color}-400'
    },
    thumb: {
      base: '[&::-webkit-slider-thumb]:relative [&::-moz-range-thumb]:relative [&::-webkit-slider-thumb]:z-[1] [&::-moz-range-thumb]:z-[1] [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0',
      color: 'text-{color}-500 dark:text-{color}-400',
      background:
        '[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:dark:bg-gray-900 [&::-moz-range-thumb]:bg-current',
      ring: '[&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-current',
      size: {
        sm: '[&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-moz-range-thumb]:w-3 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1',
        md: '[&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:w-4 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1',
        lg: '[&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:w-5 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1'
      }
    },
    size: {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    },
    default: {
      size: 'md',
      color: 'primary'
    }
  },
  formGroup: {
    wrapper: '',
    label: {
      wrapper: 'flex content-center justify-between',
      base: 'block text-sm font-medium text-gray-700 dark:text-gray-200',
      required:
        "after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"
    },
    description: 'text-sm text-gray-500 dark:text-gray-400',
    container: 'mt-1 relative',
    hint: 'text-sm text-gray-500 dark:text-gray-400',
    help: 'mt-2 text-sm text-gray-500 dark:text-gray-400',
    error: 'mt-2 text-sm text-red-500 dark:text-red-400'
  },

  // Data
  table: {
    wrapper: 'relative',
    base: 'min-w-full table-fixed',
    divide: 'divide-y divide-gray-300 dark:divide-gray-700',
    thead: '',
    tbody: 'divide-y divide-gray-200 dark:divide-gray-800',
    tr: {
      base: '',
      selected: 'bg-gray-50 dark:bg-gray-800/50',
      active: 'hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer'
    },
    th: {
      base: 'text-left rtl:text-right',
      padding: 'px-3 py-3.5',
      color: 'text-gray-900 dark:text-white',
      font: 'font-semibold',
      size: 'text-sm'
    },
    td: {
      base: 'whitespace-nowrap',
      padding: 'px-3 py-4',
      color: 'text-gray-500 dark:text-gray-400',
      font: '',
      size: 'text-sm'
    },
    loadingState: {
      wrapper:
        'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
      label: 'text-sm text-center text-gray-900 dark:text-white',
      icon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin'
    },
    emptyState: {
      wrapper:
        'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
      label: 'text-sm text-center text-gray-900 dark:text-white',
      icon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4'
    },
    default: {
      sortAscIcon: 'i-heroicons-bars-arrow-up-20-solid',
      sortDescIcon: 'i-heroicons-bars-arrow-down-20-solid',
      sortButton: {
        icon: 'i-heroicons-arrows-up-down-20-solid',
        trailing: true,
        square: true,
        color: 'gray',
        variant: 'ghost',
        class: '-m-1.5'
      },
      loadingState: {
        icon: 'i-heroicons-arrow-path-20-solid',
        label: 'Loading...'
      },
      emptyState: {
        icon: 'i-heroicons-circle-stack-20-solid',
        label: 'No items.'
      }
    }
  },

  // Navigation
  verticalNavigation: {
    wrapper: 'relative',
    base: 'group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
    ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
    padding: 'px-3 py-1.5',
    width: 'w-full',
    rounded: 'rounded-md',
    font: 'font-medium',
    size: 'text-sm',
    active:
      'text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800',
    inactive:
      'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
    label: 'truncate relative',
    icon: {
      base: 'flex-shrink-0 w-4 h-4',
      active: 'text-gray-700 dark:text-gray-200',
      inactive:
        'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200'
    },
    avatar: {
      base: 'flex-shrink-0',
      size: '3xs'
    },
    badge: {
      base: 'relative ms-auto inline-block py-0.5 px-2 text-xs rounded-md -me-1 -my-0.5',
      active: 'bg-white dark:bg-gray-900',
      inactive:
        'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-white dark:group-hover:bg-gray-900'
    }
  },
  commandPalette: {
    wrapper:
      'flex flex-col flex-1 min-h-0 divide-y divide-gray-100 dark:divide-gray-800',
    container:
      'relative flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800 scroll-py-2',
    input: {
      wrapper: 'relative flex items-center',
      base: 'w-full placeholder-gray-400 dark:placeholder-gray-500 bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 focus:outline-none',
      padding: 'px-4',
      height: 'h-12',
      size: 'sm:text-sm',
      icon: {
        base: 'pointer-events-none absolute start-4 text-gray-400 dark:text-gray-500',
        size: 'h-4 w-4',
        padding: 'ps-10'
      },
      closeButton: 'absolute end-4'
    },
    emptyState: {
      wrapper:
        'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
      label: 'text-sm text-center text-gray-900 dark:text-white',
      queryLabel: 'text-sm text-center text-gray-900 dark:text-white',
      icon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4'
    },
    group: {
      wrapper: 'p-2',
      label: 'px-2 my-2 text-xs font-semibold text-gray-900 dark:text-white',
      container: 'text-sm text-gray-700 dark:text-gray-200',
      command: {
        base: 'flex justify-between select-none items-center rounded-md px-2 py-1.5 gap-2 relative',
        active: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
        inactive: '',
        label: 'flex items-center gap-1.5 min-w-0',
        prefix: 'text-gray-400 dark:text-gray-500',
        suffix: 'text-gray-400 dark:text-gray-500',
        container: 'flex items-center gap-2 min-w-0',
        icon: {
          base: 'flex-shrink-0 w-4 h-4',
          active: 'text-gray-900 dark:text-white',
          inactive: 'text-gray-400 dark:text-gray-500'
        },
        selectedIcon: {
          base: 'h-4 w-4 text-gray-900 dark:text-white flex-shrink-0'
        },
        avatar: {
          base: 'flex-shrink-0',
          size: '3xs'
        },
        chip: {
          base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full'
        },
        disabled: 'opacity-50',
        shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5'
      },
      active: 'flex-shrink-0 text-gray-500 dark:text-gray-400',
      inactive: 'flex-shrink-0 text-gray-500 dark:text-gray-400'
    },
    default: {
      icon: 'i-heroicons-magnifying-glass-20-solid',
      loadingIcon: 'i-heroicons-arrow-path-20-solid',
      emptyState: {
        icon: 'i-heroicons-magnifying-glass-20-solid',
        label: "We couldn't find any items.",
        queryLabel:
          "We couldn't find any items with that term. Please try again."
      },
      closeButton: null,
      selectedIcon: 'i-heroicons-check-20-solid'
    }
  },
  pagination: {
    wrapper: 'flex items-center -space-x-px',
    base: '',
    rounded: 'first:rounded-s-md last:rounded-e-md',
    default: {
      size: 'sm',
      activeButton: {
        color: 'primary'
      },
      inactiveButton: {
        color: 'white'
      },
      prevButton: {
        color: 'white',
        class: 'rtl:[&_span:first-child]:rotate-180',
        icon: 'i-heroicons-chevron-left-20-solid'
      },
      nextButton: {
        color: 'white',
        class: 'rtl:[&_span:last-child]:rotate-180',
        icon: 'i-heroicons-chevron-right-20-solid '
      }
    }
  },

  // Overlays
  modal: {
    wrapper: 'relative z-50',
    inner: 'fixed inset-0 overflow-y-auto',
    container:
      'flex min-h-full items-end sm:items-center justify-center text-center',
    padding: 'p-4 sm:p-0',
    base: 'relative text-left rtl:text-right overflow-hidden sm:my-8 w-full flex flex-col',
    overlay: {
      base: 'fixed inset-0 transition-opacity',
      background: 'bg-gray-200/75 dark:bg-gray-800/75',
      transition: {
        enter: 'ease-out duration-300',
        enterFrom: 'opacity-0',
        enterTo: 'opacity-100',
        leave: 'ease-in duration-200',
        leaveFrom: 'opacity-100',
        leaveTo: 'opacity-0'
      }
    },
    background: 'bg-white dark:bg-gray-900',
    ring: '',
    rounded: 'rounded-lg',
    shadow: 'shadow-xl',
    width: 'sm:max-w-lg',
    height: '',
    transition: {
      enter: 'ease-out duration-300',
      enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
      enterTo: 'opacity-100 translate-y-0 sm:scale-100',
      leave: 'ease-in duration-200',
      leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
      leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
    }
  },
  slideover: {
    wrapper: 'fixed inset-0 flex z-50',
    overlay: {
      base: 'fixed inset-0 transition-opacity',
      background: 'bg-gray-200/75 dark:bg-gray-800/75',
      transition: {
        enter: 'ease-in-out duration-500',
        enterFrom: 'opacity-0',
        enterTo: 'opacity-100',
        leave: 'ease-in-out duration-500',
        leaveFrom: 'opacity-100',
        leaveTo: 'opacity-0'
      }
    },
    base: 'relative flex-1 flex flex-col w-full focus:outline-none',
    background: 'bg-white dark:bg-gray-900',
    ring: '',
    rounded: '',
    padding: '',
    shadow: 'shadow-xl',
    width: 'w-screen max-w-md',
    transition: {
      enter: 'transform transition ease-in-out duration-300',
      leave: 'transform transition ease-in-out duration-200'
    }
  },
  popover: {
    wrapper: 'relative',
    container: 'z-20',
    width: '',
    background: 'bg-white dark:bg-gray-900',
    shadow: 'shadow-lg',
    rounded: 'rounded-md',
    ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
    base: 'overflow-hidden focus:outline-none',
    transition: {
      enterActiveClass: 'transition ease-out duration-200',
      enterFromClass: 'opacity-0 translate-y-1',
      enterToClass: 'opacity-100 translate-y-0',
      leaveActiveClass: 'transition ease-in duration-150',
      leaveFromClass: 'opacity-100 translate-y-0',
      leaveToClass: 'opacity-0 translate-y-1'
    },
    popper: {
      strategy: 'fixed'
    }
  },
  tooltip: {
    wrapper: 'relative inline-flex',
    container: 'z-20',
    width: 'max-w-xs',
    background: 'bg-white dark:bg-gray-900',
    color: 'text-gray-900 dark:text-white',
    shadow: 'shadow',
    rounded: 'rounded',
    ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
    base: 'invisible lg:visible h-6 px-2 py-1 text-xs font-normal truncate',
    shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5',
    transition: {
      enterActiveClass: 'transition ease-out duration-200',
      enterFromClass: 'opacity-0 translate-y-1',
      enterToClass: 'opacity-100 translate-y-0',
      leaveActiveClass: 'transition ease-in duration-150',
      leaveFromClass: 'opacity-100 translate-y-0',
      leaveToClass: 'opacity-0 translate-y-1'
    },
    popper: {
      strategy: 'fixed'
    }
  },
  contextMenu: {
    wrapper: 'relative',
    container: 'z-20',
    width: '',
    background: 'bg-white dark:bg-gray-900',
    shadow: 'shadow-lg',
    rounded: 'rounded-md',
    ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
    base: 'overflow-hidden focus:outline-none',
    transition: {
      enterActiveClass: 'transition ease-out duration-200',
      enterFromClass: 'opacity-0 translate-y-1',
      enterToClass: 'opacity-100 translate-y-0',
      leaveActiveClass: 'transition ease-in duration-150',
      leaveFromClass: 'opacity-100 translate-y-0',
      leaveToClass: 'opacity-0 translate-y-1'
    },
    popper: {
      placement: 'bottom-start',
      scroll: false
    }
  },
  notification: {
    wrapper: 'w-full pointer-events-auto',
    container: 'relative overflow-hidden',
    title: 'text-sm font-medium text-gray-900 dark:text-white',
    description: 'mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400',
    background: 'bg-white dark:bg-gray-900',
    shadow: 'shadow-lg',
    rounded: 'rounded-lg',
    padding: 'p-4',
    ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
    icon: {
      base: 'flex-shrink-0 w-5 h-5',
      color: 'text-{color}-500 dark:text-{color}-400'
    },
    avatar: {
      base: 'flex-shrink-0 self-center',
      size: 'md'
    },
    progress: {
      base: 'absolute bottom-0 end-0 start-0 h-1',
      background: 'bg-{color}-500 dark:bg-{color}-400'
    },
    transition: {
      enterActiveClass: 'transform ease-out duration-300 transition',
      enterFromClass:
        'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2',
      enterToClass: 'translate-y-0 opacity-100 sm:translate-x-0',
      leaveActiveClass: 'transition ease-in duration-100',
      leaveFromClass: 'opacity-100',
      leaveToClass: 'opacity-0'
    },
    default: {
      color: 'primary',
      icon: null,
      closeButton: {
        icon: 'i-heroicons-x-mark-20-solid',
        color: 'gray',
        variant: 'link',
        padded: false
      },
      actionButton: {
        size: 'xs',
        color: 'white'
      }
    }
  },
  notifications: {
    wrapper: 'fixed flex flex-col justify-end z-[55]',
    position: 'bottom-0 end-0',
    width: 'w-full sm:w-96',
    container: 'px-4 sm:px-6 py-6 space-y-3 overflow-y-auto'
  },

  // Layout
  card: {
    base: 'overflow-hidden',
    background: 'bg-white dark:bg-gray-900',
    divide: 'divide-y divide-gray-200 dark:divide-gray-800',
    ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
    rounded: 'rounded-lg',
    shadow: 'shadow',
    body: {
      base: '',
      background: '',
      padding: 'px-4 py-5 sm:p-6'
    },
    header: {
      base: '',
      background: '',
      padding: 'px-4 py-5 sm:px-6'
    },
    footer: {
      base: '',
      background: '',
      padding: 'px-4 py-4 sm:px-6'
    }
  },
  container: {
    base: 'mx-auto',
    padding: 'px-4 sm:px-6 lg:px-8',
    constrained: 'max-w-7xl'
  },
  skeleton: {
    base: 'animate-pulse',
    background: 'bg-gray-100 dark:bg-gray-800',
    rounded: 'rounded-md'
  }
};
