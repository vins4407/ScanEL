import re
import json

def parse_whois_output(output):
    parsed_data = {}

    domain_match = re.search(r"Domain Name:\s*(\S+)", output)
    if domain_match:
        parsed_data["Domain Name"] = domain_match.group(1)

    registry_id_match = re.search(r"Registry Domain ID:\s*(\S+)", output)
    if registry_id_match:
        parsed_data["Registry Domain ID"] = registry_id_match.group(1)

    registrar_match = re.search(r"Registrar:\s*(.+)", output)
    if registrar_match:
        parsed_data["Registrar"] = registrar_match.group(1)

    updated_date_match = re.search(r"Updated Date:\s*(\S+)", output)
    if updated_date_match:
        parsed_data["Updated Date"] = updated_date_match.group(1)

    creation_date_match = re.search(r"Creation Date:\s*(\S+)", output)
    if creation_date_match:
        parsed_data["Creation Date"] = creation_date_match.group(1)

    expiry_date_match = re.search(r"Registry Expiry Date:\s*(\S+)", output)
    if expiry_date_match:
        parsed_data["Registry Expiry Date"] = expiry_date_match.group(1)

    registrar_id_match = re.search(r"Registrar IANA ID:\s*(\S+)", output)
    if registrar_id_match:
        parsed_data["Registrar IANA ID"] = registrar_id_match.group(1)

    registrar_email_match = re.search(r"Registrar Abuse Contact Email:\s*(\S+)", output)
    if registrar_email_match:
        parsed_data["Registrar Abuse Contact Email"] = registrar_email_match.group(1)

    registrar_phone_match = re.search(r"Registrar Abuse Contact Phone:\s*(\S+)", output)
    if registrar_phone_match:
        parsed_data["Registrar Abuse Contact Phone"] = registrar_phone_match.group(1)

    name_servers_match = re.findall(r"Name Server:\s*(\S+)", output)
    if name_servers_match:
        parsed_data["Name Servers"] = name_servers_match

    return json.dumps(parsed_data)

def parse_dig_output(output):
    answer_section_match = re.search(r"ANSWER SECTION:(.*?)\n\n", output, re.DOTALL)
    if answer_section_match:
        answer_section = answer_section_match.group(1)

        answer_lines = answer_section.strip().split('\n')
        parsed_data = []
        for line in answer_lines:
            line_parts = line.split()
            if len(line_parts) >= 5:
                record = {
                    "Name": line_parts[0],
                    "TTL": line_parts[1],
                    "Type": line_parts[2],
                    "Value": line_parts[3],
                    "IP": line_parts[4]
                }
                parsed_data.append(record)
        return json.dumps(parsed_data, indent=4)
    return None



def parse_nmap_output(output):
    open_ports = []

    port_section_match = re.search(r"PORT\s+STATE\s+SERVICE\n(.+?)\n\n", output, re.DOTALL)
    if port_section_match:
        port_section = port_section_match.group(1)
        port_lines = port_section.strip().split('\n')

        for line in port_lines:
            port_parts = line.split()
            if len(port_parts) >= 3:
                port = {
                    "Port": port_parts[0],
                    "State": port_parts[1],
                    "Service": port_parts[2]
                }
                open_ports.append(port)

    return json.dumps(open_ports, indent=4)

def parse_subfinder_output(output):
    subdomains = output.strip().split('\n')
    data = {
        "subdomains": subdomains
    }
    return json.dumps(data)


def parse_http_output(input_data):
    # Convert the results to JSON format
    clean_output = re.sub(r'\x1b\[[0-9;]*m', '', input_data)
    # Regular expression pattern to match the desired content
    pattern = r'\[(.*?)\]'

    # Find all matches of the pattern in the input data
    pattern = r'\[([^\]]+)\]'

    # Find all matches of the pattern in the input data
    matches = re.findall(pattern, clean_output)

    # Create a dictionary to store the results
    results = {}

    # Extract the first sentence and remove ANSI escape codes
    for match in matches:
        parts = match.split(':')
        if len(parts) == 2:
            key = parts[0].strip()
            value = re.sub('\x1b\[.*?m', '', parts[1].strip().split('.')[0])
            results[key] = value

    # Convert the results to JSON format
    json_data = json.dumps(results, indent=4)

    # Print the JSON data
    return(json_data)



def parse_sslscan_output(input_data):
    clean_output = re.sub(r'\x1b\[[0-9;]*m', '', input_data)


    pattern = r'\[(.*?)\]'

    matches = re.findall(pattern, clean_output)

    results = {}

    for i in range(0, len(matches), 4):
        key = matches[i]
        value = matches[i+3]
        results[key] = value

    json_data = json.dumps(results, indent=4)

    return(json_data)


def parse_dnsscan_output(input_data):
    clean_output = re.sub(r'\x1b\[[0-9;]*m', '', input_data)

    pattern = r'\[(.*?)\] \[(.*?)\] \[(.*?)\] (.*?) \[(.*?)\]'

    matches = re.findall(pattern, clean_output)

    results = {}

    for match in matches:
        key = match[0]
        value = match[3].strip('\"')
        results[key] = value

    json_data = json.dumps(results, indent=4)

    return(json_data)

def parse_whatweb_output(input_data):
    clean_output = re.sub(r'\x1b\[[0-9;]*m', '', input_data)
    pattern = r'\[(.*?)\] \[(.*?)\] \[(.*?)\] (https?://\S+)'

    matches = re.findall(pattern, clean_output)

    results = {}

    for match in matches:
        key = match[0]
        value = match[0].split(":")[1] if ":" in match[0] else ""
        results[key] = value

    json_data = json.dumps(results, indent=4)

    return(json_data)


def parse_wapiti_output(input_data):
    data = json.loads(input_data)

    # Extract the vulnerabilities section
    vulnerabilities = data.get('vulnerabilities')

    # Create a dictionary to store the vulnerability information
    vulnerability_dict = {}

    # Iterate over each vulnerability
    for vulnerability, details in vulnerabilities.items():
        # Skip if details are empty
        if not details:
            continue
        
        # Add the vulnerability name and details to the dictionary
        vulnerability_dict[vulnerability] = details

    # Convert the vulnerability dictionary to JSON
    json_output = json.dumps(vulnerability_dict)

    # Return the JSON output
    return json_output