// @flow

export type Show = {
  poster: string,
  title: string,
  year: string,
  description: string,
  imdbID: string,
  trailer: string
}

declare var module: {
  hot: {
    accept (path: string, callback: () => void): void
  }
};
