import vote_card
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    vote_card.VoteCard(
        id='input',
        value='my-value',
        label='my-label',
    ),
    html.Div(id='output')
])

print(vote_card.VoteCard.__dict__)
# @app.callback(
#     Output('output', 'children'),
#     [Input('input', 'value')])
# def display_output(value):
#     return f"""
#     You have entered {value}
#     Like status: nothing yet
#     """


if __name__ == '__main__':
    app.run_server(debug=True)
