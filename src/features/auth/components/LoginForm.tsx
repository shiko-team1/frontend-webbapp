'use client';

import Link from "next/link";

import { EyeOff, Lock, User } from "lucide-react";
import { useAuth } from "@/features/auth/contexts/useAuth";

export function LoginForm() {
	const { email } = useAuth();

	return (
		<section className="mx-auto flex w-full max-w-md flex-col items-center justify-center py-6 lg:max-w-none lg:py-0">
			<div className="mx-auto w-full max-w-md">
				<h1 className="text-4xl font-medium tracking-tight text-[var(--secondary-color)] sm:text-5xl">
					Enter Password
				</h1>

				<p className="mt-2 text-sm leading-6 text-[#7c808a]">
					Please enter your password to log in to your account.
				</p>

				<form className="mt-6 space-y-4">
					<label className="block">
						<span className="mb-2 block text-xs font-semibold text-[var(--secondary-color)]">
							Email address
						</span>
						<div className="relative">
							<input
								type="email"
								name="email"
								value={email}
								readOnly
								placeholder="Enter your email address"
								className="w-full rounded-md border border-[#ececec] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--font-color)] outline-none transition placeholder:text-[#b7b7b7] focus:border-[var(--primary-color)]"
							/>

							<User
								className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#b7b7b7]"
								size={14}
							/>
						</div>
					</label>

					<label className="block">
						<span className="mb-2 block text-xs font-semibold text-[var(--secondary-color)]">
							Password
						</span>

						<div className="relative">
							<input
								type="password"
								name="password"
								placeholder="Enter your password"
								className="w-full rounded-md border border-[#ececec] bg-white py-2.5 pl-10 pr-10 text-sm text-[var(--font-color)] outline-none transition placeholder:text-[#b7b7b7] focus:border-[var(--primary-color)]"
							/>

							<Lock
								className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#b7b7b7]"
								size={14}
							/>

							<EyeOff
								className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#b7b7b7]"
								size={14}
							/>
						</div>
					</label>

					<div className="flex items-center justify-between text-[0.6875rem] text-[#7c808a]">
						<label className="flex items-center gap-2">
							<input
								type="checkbox"
								name="remember"
								className="h-4 w-4 rounded border-[#d9d9d9] text-[var(--primary-color)] focus:ring-[var(--primary-color)]"
							/>
							Keep me logged in
						</label>

						<Link
							href="/auth/forgot-password"
							className="font-semibold text-[var(--primary-color)] transition hover:opacity-80"
						>
							Forgot your password?
						</Link>
					</div>

					<button
						type="submit"
						className="mt-2 w-full rounded-md bg-[var(--primary-color)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
					>
						Sign In
					</button>
				</form>
			</div>
		</section>
	);
}
