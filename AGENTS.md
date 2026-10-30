<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Order submissions use a dedicated validated POST server function and a private RLS-locked table; only the server may write requests so customer data is never publicly readable.
- Each submission uses a unique retry key with insert-only conflict handling to prevent duplicate orders when a visitor retries a failed connection.
- Owner email notifications use Lovable's managed app-email service only after a verified owned sender domain and an explicit owner recipient are available; never create email queues or email tables.
