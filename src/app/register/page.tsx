const Registry = () => {
	return (
		<div className="flex flex-col gap-5 items-center bg-sky-950 rounded-3xl w-80 p-10">
			<div className="flex flex-col gap-2 items-center">
				<label htmlFor="username">Username</label>
				<input id="username" type="text" placeholder="username" />
			</div>
			<div className="flex flex-col gap-2 items-center">
				<label htmlFor="firstname">Firstname</label>
				<input id="firstname" type="text" placeholder="firstname" />
			</div>
			<div className="flex flex-col gap-2 items-center">
				<label htmlFor="lastname">Lastname</label>
				<input id="lastname" type="text" placeholder="lastname" />
			</div>
			<div className="flex flex-col gap-2 items-center">
				<label htmlFor="mail">Mail</label>
				<input id="mail" type="text" placeholder="mail" />
			</div>
			<div className="flex flex-col gap-2 items-center">
				<label htmlFor="password">Password</label>
				<input id="password" type="password" placeholder="password" />
			</div>
			<div className="flex justify-center">
				<input
					type="submit"
					value="Send"
					className="text-center border-2 border-indigo-600 p-3 rounded-2xl w-72"
				/>
			</div>
		</div>
	)
}

export default Registry
