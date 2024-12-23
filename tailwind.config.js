/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundSize: {
				'400%': '400%',
			},
			animation: {
				'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
				'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
				'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
				'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
				'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
				'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
				'text-slide-8': 'text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient': 'gradient 8s linear infinite',
				'border': 'border 4s linear infinite',
				'animatetop': 'animatetop 0.4s',
				'zoomIn': 'zoomIn 0.5s',
				'animate': 'animate 25s linear infinite',
				'background-animate': 'background-gradient-animation 20s ease infinite',
			},
			keyframes: {
				'text-slide-2': {
					'0%, 40%': {
						transform: 'translateY(0%)'
					},
					'50%, 90%': {
						transform: 'translateY(-33.33%)'
					},
					'100%': {
						transform: 'translateY(-66.66%)'
					}
				},
				'text-slide-3': {
					'0%, 26.66%': {
						transform: 'translateY(0%)'
					},
					'33.33%, 60%': {
						transform: 'translateY(-25%)'
					},
					'66.66%, 93.33%': {
						transform: 'translateY(-50%)'
					},
					'100%': {
						transform: 'translateY(-75%)'
					}
				},
				'text-slide-4': {
					'0%, 20%': {
						transform: 'translateY(0%)'
					},
					'25%, 45%': {
						transform: 'translateY(-20%)'
					},
					'50%, 70%': {
						transform: 'translateY(-40%)'
					},
					'75%, 95%': {
						transform: 'translateY(-60%)'
					},
					'100%': {
						transform: 'translateY(-80%)'
					}
				},
				'text-slide-5': {
					'0%, 16%': {
						transform: 'translateY(0%)'
					},
					'20%, 36%': {
						transform: 'translateY(-16.66%)'
					},
					'40%, 56%': {
						transform: 'translateY(-33.33%)'
					},
					'60%, 76%': {
						transform: 'translateY(-50%)'
					},
					'80%, 96%': {
						transform: 'translateY(-66.66%)'
					},
					'100%': {
						transform: 'translateY(-83.33%)'
					}
				},
				'text-slide-6': {
					'0%, 13.33%': {
						transform: 'translateY(0%)'
					},
					'16.66%, 30%': {
						transform: 'translateY(-14.28%)'
					},
					'33.33%, 46.66%': {
						transform: 'translateY(-28.57%)'
					},
					'50%, 63.33%': {
						transform: 'translateY(-42.85%)'
					},
					'66.66%, 80%': {
						transform: 'translateY(-57.14%)'
					},
					'83.33%, 96.66%': {
						transform: 'translateY(-71.42%)'
					},
					'100%': {
						transform: 'translateY(-85.71%)'
					}
				},
				'text-slide-7': {
					'0%, 11.43%': {
						transform: 'translateY(0%)'
					},
					'14.28%, 25.71%': {
						transform: 'translateY(-12.5%)'
					},
					'28.57%, 40%': {
						transform: 'translateY(-25%)'
					},
					'42.85%, 54.28%': {
						transform: 'translateY(-37.5%)'
					},
					'57.14%, 68.57%': {
						transform: 'translateY(-50%)'
					},
					'71.42%, 82.85%': {
						transform: 'translateY(-62.5%)'
					},
					'85.71%, 97.14%': {
						transform: 'translateY(-75%)'
					},
					'100%': {
						transform: 'translateY(-87.5%)'
					}
				},
				'text-slide-8': {
					'0%, 10%': {
						transform: 'translateY(0%)'
					},
					'12.5%, 22.5%': {
						transform: 'translateY(-11.11%)'
					},
					'25%, 35%': {
						transform: 'translateY(-22.22%)'
					},
					'37.5%, 47.5%': {
						transform: 'translateY(-33.33%)'
					},
					'50%, 60%': {
						transform: 'translateY(-44.44%)'
					},
					'62.5%, 72.5%': {
						transform: 'translateY(-55.55%)'
					},
					'75%, 85%': {
						transform: 'translateY(-66.66%)'
					},
					'87.5%, 97.5%': {
						transform: 'translateY(-77.77%)'
					},
					'100%': {
						transform: 'translateY(-88.88%)'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gradient': {
					to: { 'background-position': '200% center' },
				},
				'border': {
					to: { '--border-angle': '360deg' },
				},
				'animatetop': {
					'from': { top: '-300px', opacity: '0' },
					'to': { top: '0', opacity: '1' },
				},
				'zoomIn': {
					'0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
					'50%': { opacity: '1' },
				},
				'animate': {
					'0%': {
						transform: 'translateY(0) rotate(0deg)',
						opacity: '1',
						borderRadius: '0'
					},
					'100%': {
						transform: 'translateY(-1000px) rotate(720deg)',
						opacity: '0',
						borderRadius: '50%'
					},
				},
				'background-gradient-animation': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

