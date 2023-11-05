import _db from "./_db.js";

export const resolvers = {
	Query: {
		games() {
			return _db.games;
		},
		game(_, args) {
			return _db.games.find((games) => games.id === args.id);
		},
		authors() {
			return _db.authors;
			games;
		},
		author(_, args) {
			return _db.authors.find((author) => author.id === args.id);
		},
		reviews() {
			return _db.reviews;
		},
		review(_, args) {
			return _db.reviews.find((review) => review.id === args.id);
		},
	},
	Game: {
		reviews(parent) {
			return _db.reviews.filter((r) => r.game_id === parent.id);
		},
	},
	Mutation: {
		deleteGame(_, args) {
			_db.games.filter((g) => g.id !== args.id);
			return _db.games;
		},
		addGame(_, args) {
			let game = {
				...args.game,
				id: Math.floor(Math.random() * 100),
			};
			_db.games.push(game);
			return game;
		},
		updateGame(_, args) {
			_db.games = _db.games.map((g) => {
				if (g.id === args.id) {
					return { ...g, ...args.edits };
				}
				return g;
			});

			return _db.games.find((g) => g.id === args.id);
		},
	},
};

// Resolvers are actually methods that returns us the data attacheds to the db and the queries
