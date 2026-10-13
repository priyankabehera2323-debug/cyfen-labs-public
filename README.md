# CYFEN LABS

**Think beyond the obvious. Build. Secure. Defend.**

CYFEN LABS is an independent cybersecurity learning and research project focused on defensive security, web application security, and responsible security testing.

## Current public website

- CYFEN LABS homepage and project introduction
- About page
- Security research focus areas
- Responsible testing guidelines
- Public health endpoint at `/health`

## Planned features

- CTF challenge catalogue
- Qíngbào Index for verified learning milestones
- Additional security research write-ups and learning resources

Planned features are not currently enabled on the public website.

## Run locally

Requirements: Python 3.10 or later.

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Open http://127.0.0.1:5000 in your browser.

## Responsible use

Only assess systems you own or have explicit permission to test. Follow the scope and rules of each authorized lab.

## Technology

- Python
- Flask
- HTML and CSS
- Gunicorn for deployment
