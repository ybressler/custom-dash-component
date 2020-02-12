import vote_card
import dash
from dash.dependencies import Input, Output
from dash.exceptions import PreventUpdate
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    vote_card.VoteCard(
        id='vote-card-1',
        label='my-label',
        metadata="{some dictionary goes here}"
    ),
    html.Div(id='output')
])


@app.callback(
    Output('output', 'children'),
    [Input('vote-card-1', 'value')])
def display_output(value):
    if not value:
        raise PreventUpdate

    return f"""
    You have entered {value}
    Like status: nothing yet
    """


if __name__ == '__main__':
    app.run_server(debug=True)
