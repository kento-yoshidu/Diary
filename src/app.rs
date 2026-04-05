use leptos::prelude::*;
use serde::Deserialize;

#[derive(Debug, Clone, Deserialize)]
pub struct Book {
    pub id: u32,
    pub title: String,
    pub author: String,
    pub genre: String,
    pub published_year: u32,
    pub description: String,
}

fn books() -> Vec<Book> {
    serde_json::from_str(include_str!("../data/books.json")).unwrap()
}

#[component]
pub fn App() -> impl IntoView {
    view! {
        <h1>"Book Shelf"</h1>
        <ul>
            {books().into_iter().map(|b| view! {
                <li>{b.title}" — "{b.author}</li>
            }).collect_view()}
        </ul>
    }
}
