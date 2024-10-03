import kbBoard from "../../assets/illustrations/kb-board.svg";

export function Home() {
	return (
		<div className="font-nauman-regular tracking-wide flex items-center justify-between gap-10 mt-14">
			<div className="w-2/5">
				<img src={kbBoard} alt="board" />
			</div>
			<div className="w-1/2">
				<p className="text-2xl leading-10">
					An application for you to manage your projects, tasks, teams, keep track of everything and much more...
				</p>
			</div>
		</div>
	);
}

